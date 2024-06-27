import React from "react";

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-md shadow-lg p-4">
                <h3 className="text-lg font-semibold">React.js</h3>
                <p className="text-sm text-gray-500">
                    A JavaScript library for building user interfaces.
                </p>
            </div>
            <div className="bg-white rounded-md shadow-lg p-4">
                <h3 className="text-lg font-semibold">Next.js</h3>
                <p className="text-sm text-gray-500">
                    A React framework for building server-rendered applications.
                </p>
            </div>
            <div className="bg-white rounded-md shadow-lg p-4">
                <h3 className="text-lg font-semibold">WordPress</h3>
                <p className="text-sm text-gray-500">
                    A popular content management system (CMS).
                </p>
            </div>
            <div className="bg-white rounded-md shadow-lg p-4">
                <h3 className="text-lg font-semibold">Flutter</h3>
                <p className="text-sm text-gray-500">
                    A cross-platform mobile development framework.
                </p>
            </div>
            <div className="bg-white rounded-md shadow-lg p-4">
                <h3 className="text-lg font-semibold">Laravel</h3>
                <p className="text-sm text-gray-500">
                    A PHP framework for building web applications.
                </p>
            </div>
        </div>
    );
};

export default SkillsGrid;