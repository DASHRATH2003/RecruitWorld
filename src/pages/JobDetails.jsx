import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJob } from '../services/api';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJob(id);
        setJob(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch job details. Please try again later.');
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setApplicationForm(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement job application submission
    alert('Application submission will be implemented soon!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#033A78] mx-auto"></div>
            <p className="mt-4 text-[#033A78]">Loading job details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">
            <p>{error || 'Job not found'}</p>
            <button
              onClick={() => navigate('/jobs')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#033A78] hover:bg-[#0A2472]"
            >
              Back to Jobs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#033A78] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/jobs')}
            className="text-white mb-4 flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Jobs
          </button>
          <h1 className="text-3xl font-bold text-white">{job.title}</h1>
          <p className="text-white mt-2">{job.company}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="mt-1 text-gray-600">{job.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Job Type</h3>
                <p className="mt-1 text-gray-600">{job.type}</p>
              </div>
              {job.experience && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Experience Required</h3>
                  <p className="mt-1 text-gray-600">{job.experience}</p>
                </div>
              )}
              {job.salary && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Salary Range</h3>
                  <p className="mt-1 text-gray-600">{job.salary}</p>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Job Description</h3>
              <div className="mt-4 prose prose-blue max-w-none">
                <p className="text-gray-600">{job.description}</p>
              </div>
            </div>

            {job.requirements && (
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium text-gray-900">Requirements</h3>
                <div className="mt-4 prose prose-blue max-w-none">
                  <p className="text-gray-600">{job.requirements}</p>
                </div>
              </div>
            )}

            {job.benefits && (
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium text-gray-900">Benefits</h3>
                <div className="mt-4 prose prose-blue max-w-none">
                  <p className="text-gray-600">{job.benefits}</p>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowApplicationForm(!showApplicationForm)}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#033A78] hover:bg-[#0A2472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#033A78]"
              >
                Apply for this Position
              </button>
            </div>
          </div>
        </div>

        {/* Application Form */}
        {showApplicationForm && (
          <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Application</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#033A78] focus:ring-[#033A78] sm:text-sm"
                      value={applicationForm.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#033A78] focus:ring-[#033A78] sm:text-sm"
                      value={applicationForm.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#033A78] focus:ring-[#033A78] sm:text-sm"
                      value={applicationForm.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      id="experience"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#033A78] focus:ring-[#033A78] sm:text-sm"
                      value={applicationForm.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    id="coverLetter"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#033A78] focus:ring-[#033A78] sm:text-sm"
                    value={applicationForm.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're the perfect fit for this position..."
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                    Resume/CV (PDF) *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    required
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-medium
                      file:bg-[#033A78] file:text-white
                      hover:file:cursor-pointer hover:file:bg-[#0A2472]"
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#033A78]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#033A78] hover:bg-[#0A2472] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#033A78]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails; 