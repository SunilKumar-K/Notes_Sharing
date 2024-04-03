import React from 'react'
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className='max-w-6xl mx-auto'>
            <footer className="footer p-10">
                <aside>
                    <h1 className='text-3xl font-bold uppercase'>Notes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Web Development</a>
                    <a className="link link-hover">Mobile Development</a>
                    <a className="link link-hover">SEO</a>
                    <a className="link link-hover">Digital Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                            <p className="w-4 h-4 flex-shrink-0"><FaPhoneAlt /></p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="w-4 h-4 flex-shrink-0"><MdEmail /></p>

                            <p className="text-sm text-gray-500 dark:text-gray-400">info@example.com</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <p className="w-4 h-4 flex-shrink-0"><FaMap /></p>

                            <p className="text-sm text-gray-500 dark:text-gray-400">60 Street Road, City, 10000, Country</p>
                        </div>
                    </div>
            </nav>
        </footer>
        </div >
    )
}
