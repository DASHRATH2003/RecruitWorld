import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiBriefcase, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';
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

  // Get user role from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.role === 'admin';

  // Load data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch jobs posted by the logged-in user
        const jobsResponse = await getMyJobs();
        const fetchedJobs = jobsResponse.data || [];
        setJobs(fetchedJobs);

        // For now, we'll use empty applicants array until we implement that feature
        const mockApplicants = [];
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
        alert('Failed to load dashboard data. Please try again.');
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
      setStats({
        ...stats,
        totalJobs: stats.totalJobs + 1,
        activeJobs: stats.activeJobs + 1
      });
      
      // Reset form
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
      
      alert('Job posted successfully!');
    } catch (error) {
      console.error('Error posting job:', error);
      alert(error.response?.data?.message || 'Failed to post job. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <FiBriefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Jobs</dt>
                        <dd className="text-2xl font-semibold text-gray-900">{stats.totalJobs}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <FiBriefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Active Jobs</dt>
                        <dd className="text-2xl font-semibold text-gray-900">{stats.activeJobs}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <FiUsers className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Applicants</dt>
                        <dd className="text-2xl font-semibold text-gray-900">{stats.totalApplicants}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                      <FiUsers className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">New Applicants</dt>
                        <dd className="text-2xl font-semibold text-gray-900">{stats.newApplicants}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Job Postings</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicants
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.slice(0, 5).map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{job.title}</div>
                          <div className="text-sm text-gray-500">Posted {job.posted}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.company}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {job.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.applicants}</td>
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
              <h2 className="text-2xl font-bold text-gray-900">Job Postings</h2>
              <button
                onClick={() => setActiveTab('post-job')}
                className="bg-[#033A78] text-white px-4 py-2 rounded-md hover:bg-[#0A2472] transition"
              >
                Post New Job
              </button>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicants</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobs.map((job) => (
                      <tr key={job.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.company}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.posted}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.applicants}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-[#033A78] hover:text-[#0A2472] mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
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
          <div className="bg-white shadow-sm rounded-lg border border-gray-200">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Post a New Job</h3>
              <p className="mt-1 text-sm text-gray-500">Fill in the details below to create a new job posting.</p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                      Job Title *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={jobForm.title}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. Senior Software Engineer"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company Name *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        value={jobForm.company}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. Recruit World"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Location *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="location"
                        id="location"
                        required
                        value={jobForm.location}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. New York, NY"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                      Job Type *
                    </label>
                    <div className="mt-1">
                      <select
                        name="type"
                        id="type"
                        required
                        value={jobForm.type}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Experience Required *
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="experience"
                        id="experience"
                        required
                        value={jobForm.experience}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. 2-3 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                      Salary Range
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        value={jobForm.salary}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g. $50,000 - $70,000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Job Description *
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="description"
                      id="description"
                      required
                      rows={4}
                      value={jobForm.description}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter detailed job description..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                    Requirements *
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="requirements"
                      id="requirements"
                      required
                      rows={4}
                      value={jobForm.requirements}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter job requirements..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
                    Benefits
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="benefits"
                      id="benefits"
                      rows={4}
                      value={jobForm.benefits}
                      onChange={handleChange}
                      className="shadow-sm focus:ring-[#033A78] focus:border-[#033A78] block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter job benefits..."
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('jobs')}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#033A78]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#033A78] hover:bg-[#0A2472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#033A78]"
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
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h2 className="text-xl font-semibold text-gray-900">Applicants</h2>
                <p className="mt-2 text-sm text-gray-700">
                  A list of all job applicants including their name, email, applied position and status.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#033A78] hover:bg-[#0A2472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#033A78]"
                >
                  Export List
                </button>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applied For
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applied Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applicants.map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-[#033A78] flex items-center justify-center">
                                <span className="text-white font-medium text-sm">
                                  {applicant.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                              <div className="text-sm text-gray-500">{applicant.email}</div>
                              <div className="text-sm text-gray-500">{applicant.phone}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{applicant.job}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{applicant.applied}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            applicant.status === 'new' ? 'bg-green-100 text-green-800' : 
                            applicant.status === 'reviewed' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {applicant.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-[#033A78] hover:text-[#0A2472] mr-3 inline-flex items-center">
                            <span>View Profile</span>
                          </button>
                          <button className="text-[#033A78] hover:text-[#0A2472] inline-flex items-center">
                            <span>Download CV</span>
                          </button>
                        </td>
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
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Company Information</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#033A78] focus:border-[#033A78]"
                        defaultValue="Recruit World Consultancy Services"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
                        Contact Email
                      </label>
                      <input
                        type="email"
                        id="companyEmail"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#033A78] focus:border-[#033A78]"
                        defaultValue="contact@recruitworld.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
                      Company Description
                    </label>
                    <textarea
                      id="companyDescription"
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#033A78] focus:border-[#033A78]"
                      defaultValue="Recruit World Consultancy Services is a trusted recruitment and staffing partner helping businesses find top talent and individuals find meaningful careers."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-[#033A78] text-white px-6 py-2 rounded-md hover:bg-[#0A2472] transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">User Account</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#033A78] focus:border-[#033A78]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#033A78] focus:border-[#033A78]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#033A78] focus:border-[#033A78]"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-[#033A78] text-white px-6 py-2 rounded-md hover:bg-[#0A2472] transition"
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-gray-600">{isAdmin ? 'Admin Panel' : 'User Panel'}</p>
        </div>
        <nav className="mt-6">
          <div
            className={`p-4 cursor-pointer ${
              activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="flex items-center">
              <FiHome className="mr-3" />
              <span>Overview</span>
            </div>
          </div>
          <div
            className={`p-4 cursor-pointer ${
              activeTab === 'jobs' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('jobs')}
          >
            <div className="flex items-center">
              <FiBriefcase className="mr-3" />
              <span>Jobs</span>
            </div>
          </div>
          {isAdmin && (
            <div
              className={`p-4 cursor-pointer ${
                activeTab === 'users' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('users')}
            >
              <div className="flex items-center">
                <FiUsers className="mr-3" />
                <span>Users</span>
              </div>
            </div>
          )}
          <div
            className={`p-4 cursor-pointer ${
              activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <div className="flex items-center">
              <FiSettings className="mr-3" />
              <span>Settings</span>
            </div>
          </div>
          <div
            className="p-4 cursor-pointer text-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <div className="flex items-center">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;