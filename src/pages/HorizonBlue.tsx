import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { useNavigate } from 'react-router-dom';

const HorizonBlue = () => {
  const navigate = useNavigate();
  const data = portfolioData.horizonBlue;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">No data available</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 p-8"
    >
      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="mb-8 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        ← Back to Portfolio
      </button>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {data.description}
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-16">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Project Header */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="mr-4">Role: {project.role}</span>
                <span>Duration: {project.duration}</span>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-gray-50 dark:bg-gray-700">
              {project.images.map((image, idx) => (
                <div key={idx} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - View ${idx + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50 dark:bg-gray-700">
                {project.challenges && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Challenges
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.solutions && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Solutions
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      {project.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HorizonBlue;