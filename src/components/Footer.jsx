import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#F8A5C2] py-6 mt-auto border-t-2 border-[#e292b0]">
            <div className="w-full px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/10 rounded-lg p-4">
                    <div className="text-left text-white">
                        <p className="text-sm">© 2025 SK</p>
                        <p className="text-xs opacity-80">Made with fun using React</p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <a
                            href="https://github.com/SobaSkee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <i className="nes-icon github"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/stanley-ke"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <i className="nes-icon linkedin"></i>
                        </a>
                        <a
                            href="mailto:stanleyke.jobs@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <i className="nes-icon gmail"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 