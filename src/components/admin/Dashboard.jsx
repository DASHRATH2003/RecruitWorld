import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiHome, FiBriefcase, FiUsers, FiSettings, FiLogOut, 
  FiPlus, FiEdit2, FiTrash2, FiDownload, FiEye,
  FiBarChart2, FiCalendar, FiDollarSign, FiUserPlus
} from 'react-icons/fi';
import { createJob, getMyJobs } from '../../services/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
  });
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalApplicants: 0,
    newApplicants: 0,
  });
  const [loading, setLoading] = useState(true);

  // Get user role from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.role === 'admin';

  // Load data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch jobs posted by the logged-in user
        const jobsResponse = await getMyJobs();
        const fetchedJobs = jobsResponse.data || [];
        setJobs(fetchedJobs);

        // Mock applicants data
        const mockApplicants = [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phone: '555-123-4567',
            job: 'Frontend Developer',
            status: 'new',
            applied: '2023-06-15'
          },
          // Add more mock applicants as needed
        ];
        setApplicants(mockApplicants);

        // Update stats
        setStats({
          totalJobs: fetchedJobs.length,
          activeJobs: fetchedJobs.filter(job => job.status === 'active').length,
          totalApplicants: mockApplicants.length,
          newApplicants: mockApplicants.filter(app => app.status === 'new').length,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createJob(jobForm);
      
      // Update local state with the new job
      setJobs([...jobs, response.data]);
      setStats(prev => ({
        ...prev,
        totalJobs: prev.totalJobs + 1,
        activeJobs: prev.activeJobs + 1
      }));
      
      // Reset form and go back to jobs list
      setJobForm({
        title: '',
        company: '',
        location: '',
        type: 'full-time',
        experience: '',
        salary: '',
        description: '',
        requirements: '',
        benefits: '',
      });
      setActiveTab('jobs');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={<FiBriefcase className="text-blue-500" size={24} />}
                title="Total Jobs"
                value={stats.totalJobs}
                change="+12% from last month"
                color="blue"
              />
              <StatCard 
                icon={<FiBarChart2 className="text-green-500" size={24} />}
                title="Active Jobs"
                value={stats.activeJobs}
                change="+5% from last month"
                color="green"
              />
              <StatCard 
                icon={<FiUserPlus className="text-purple-500" size={24} />}
                title="Total Applicants"
                value={stats.totalApplicants}
                change="+24% from last month"
                color="purple"
              />
              <StatCard 
                icon={<FiCalendar className="text-yellow-500" size={24} />}
                title="New Applicants"
                value={stats.newApplicants}
                change="+3 today"
                color="yellow"
              />
            </div>

            {/* Recent Jobs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Recent Job Postings</h3>
                <button 
                  onClick={() => setActiveTab('jobs')}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <TableHeader>Job Title</TableHeader>
                      <TableHeader>Company</TableHeader>
                      <TableHeader>Location</TableHeader>
                      <TableHeader>Type</TableHeader>
                      <TableHeader>Applicants</TableHeader>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.slice(0, 5).map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell>
                          <div className="font-medium text-gray-900">{job.title}</div>
                          <div className="text-sm text-gray-500">Posted {job.posted}</div>
                        </TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.location}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            job.type === 'full-time' ? 'bg-green-100 text-green-800' :
                            job.type === 'part-time' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {job.type}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="mr-2">{job.applicants || 0}</span>
                            <FiUsers className="text-gray-400" />
                          </div>
                        </TableCell>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'jobs':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Job Postings</h2>
              <button
                onClick={() => setActiveTab('post-job')}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FiPlus className="mr-2" />
                Post New Job
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <TableHeader>Job Title</TableHeader>
                      <TableHeader>Company</TableHeader>
                      <TableHeader>Posted Date</TableHeader>
                      <TableHeader>Status</TableHeader>
                      <TableHeader>Applicants</TableHeader>
                      <TableHeader>Actions</TableHeader>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium text-gray-900">{job.title}</TableCell>
                        <TableCell>{job.company}</TableCell>
                        <TableCell>{job.posted}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {job.status}
                          </span>
                        </TableCell>
                        <TableCell>{job.applicants || 0}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 p-1">
                              <FiEdit2 size={18} />
                            </button>
                            <button className="text-red-600 hover:text-red-800 p-1">
                              <FiTrash2 size={18} />
                            </button>
                          </div>
                        </TableCell>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'post-job':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">Post a New Job</h3>
              <p className="text-sm text-gray-500">Fill in the details below to create a new job posting</p>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Job Title *"
                    name="title"
                    value={jobForm.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Senior Software Engineer"
                  />
                  <FormField
                    label="Company Name *"
                    name="company"
                    value={jobForm.company}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Recruit World"
                  />
                  <FormField
                    label="Location *"
                    name="location"
                    value={jobForm.location}
                    onChange={handleChange}
                    required
                    placeholder="e.g. New York, NY"
                  />
                  <SelectField
                    label="Job Type *"
                    name="type"
                    value={jobForm.type}
                    onChange={handleChange}
                    options={[
                      { value: 'full-time', label: 'Full Time' },
                      { value: 'part-time', label: 'Part Time' },
                      { value: 'contract', label: 'Contract' },
                      { value: 'internship', label: 'Internship' },
                    ]}
                  />
                  <FormField
                    label="Experience Required *"
                    name="experience"
                    value={jobForm.experience}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 2-3 years"
                  />
                  <FormField
                    label="Salary Range"
                    name="salary"
                    value={jobForm.salary}
                    onChange={handleChange}
                    placeholder="e.g. $50,000 - $70,000"
                  />
                </div>

                <TextAreaField
                  label="Job Description *"
                  name="description"
                  value={jobForm.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter detailed job description..."
                />
                
                <TextAreaField
                  label="Requirements *"
                  name="requirements"
                  value={jobForm.requirements}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Enter job requirements..."
                />
                
                <TextAreaField
                  label="Benefits"
                  name="benefits"
                  value={jobForm.benefits}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Enter job benefits..."
                />

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab('jobs')}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        );

      case 'applicants':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Applicants</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Manage all job applicants in one place
                </p>
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <FiDownload className="mr-2" />
                Export List
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <TableHeader>Applicant</TableHeader>
                      <TableHeader>Applied For</TableHeader>
                      <TableHeader>Applied Date</TableHeader>
                      <TableHeader>Status</TableHeader>
                      <TableHeader>Actions</TableHeader>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applicants.map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50 transition-colors">
                        <TableCell>
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                              {applicant.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{applicant.name}</div>
                              <div className="text-sm text-gray-500">{applicant.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{applicant.job}</TableCell>
                        <TableCell>{applicant.applied}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            applicant.status === 'new' ? 'bg-green-100 text-green-800' : 
                            applicant.status === 'reviewed' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {applicant.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 p-1">
                              <FiEye size={18} />
                            </button>
                            <button className="text-blue-600 hover:text-blue-800 p-1">
                              <FiDownload size={18} />
                            </button>
                          </div>
                        </TableCell>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
              <p className="text-sm text-gray-500">Manage your account and company information</p>
            </div>
            <div className="p-6">
              <div className="space-y-8">
                <Section title="Company Information">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Company Name"
                      value="Recruit World Consultancy Services"
                    />
                    <FormField
                      label="Contact Email"
                      value="contact@recruitworld.com"
                    />
                  </div>
                  <TextAreaField
                    label="Company Description"
                    value="Recruit World Consultancy Services is a trusted recruitment and staffing partner helping businesses find top talent and individuals find meaningful careers."
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Save Changes
                    </button>
                  </div>
                </Section>

                <Section title="Change Password">
                  <div className="space-y-4">
                    <FormField
                      label="Current Password"
                      type="password"
                    />
                    <FormField
                      label="New Password"
                      type="password"
                    />
                    <FormField
                      label="Confirm New Password"
                      type="password"
                    />
                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Change Password
                      </button>
                    </div>
                  </div>
                </Section>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Recruit World</h1>
          <p className="text-sm text-gray-500 mt-1">Admin Portal</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <NavItem 
            active={activeTab === 'dashboard'}
            icon={<FiHome size={18} />}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </NavItem>
          <NavItem 
            active={activeTab === 'jobs'}
            icon={<FiBriefcase size={18} />}
            onClick={() => setActiveTab('jobs')}
          >
            Job Postings
          </NavItem>
          <NavItem 
            active={activeTab === 'applicants'}
            icon={<FiUsers size={18} />}
            onClick={() => setActiveTab('applicants')}
          >
            Applicants
          </NavItem>
          {isAdmin && (
            <NavItem 
              active={activeTab === 'users'}
              icon={<FiUsers size={18} />}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </NavItem>
          )}
          <NavItem 
            active={activeTab === 'settings'}
            icon={<FiSettings size={18} />}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </NavItem>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
          >
            <FiLogOut className="mr-3" size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === 'dashboard' ? 'Dashboard' : 
               activeTab === 'jobs' ? 'Job Postings' : 
               activeTab === 'applicants' ? 'Applicants' : 
               activeTab === 'settings' ? 'Settings' : ''}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            renderTabContent()
          )}
        </main>
      </div>
    </div>
  );
};

// Reusable Components
const StatCard = ({ icon, title, value, change, color }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    yellow: 'bg-yellow-50 text-yellow-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${colors[color]}`}>
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{change}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableHeader = ({ children }) => (
  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    {children}
  </th>
);

const TableCell = ({ children, className = '' }) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`}>
    {children}
  </td>
);

const FormField = ({ label, type = 'text', name, value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      required={required}
      readOnly={!onChange}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      required={required}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder, required, rows = 3 }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      required={required}
      readOnly={!onChange}
    />
  </div>
);

const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h4 className="text-lg font-medium text-gray-800">{title}</h4>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const NavItem = ({ active, icon, onClick, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-3 py-2 text-sm rounded-lg ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
  >
    <span className="mr-3">{icon}</span>
    {children}
  </button>
);

export default Dashboard;