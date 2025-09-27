'use client'
import React, { useState } from 'react';
import ReservationModal from '@/app/ui/main/reservations-modal'
interface FormData {
  name: string;
  email: string;
  message: string;
  date: string;
}

const ReservationsCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    date: ''
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = () => {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Form submitted! Check console for details.');
      setFormData({ name: '', email: '', message: '', date: '' });
      setIsFlipped(false);
    };

    return (
      <div className=" min-h-screen flex items-center justify-center py-24">
        <div className="relative w-full max-w-2xl h-140" style={{ perspective: '1000px' }}>
          <div
            className={`absolute inset-0 w-full h-full transition-transform duration-700`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.7s'
            }}
          >
            {/* Front Face */}
            <div
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 p-1"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="w-full h-full bg-[#6C2C25] rounded-2xl p-8 flex items-center justify-between">
                <div className="flex-1 flex items-center">
                  <button
                    onClick={handleFlip}
                    className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 rounded-xl text-white font-semibold text-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 active:scale-95"
                  >
                    <span className="relative z-0">Reserve</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-300 to-orange-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                <div className="flex-1 text-right">
                  <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
                    Make a reservation!
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Click the button to make a reservation. Please make sure to choose the date that suits you.
                  </p>
                  <div className="mt-6 flex justify-end space-x-2">
                  </div>
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-1"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="w-full h-full bg-[#6C2C25] rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Contact Form</h3>
                  <button
                    onClick={handleFlip}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-[#6C2C25] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-[#6C2C25] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <ReservationModal></ReservationModal>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Extra details we need to know"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#6C2C25] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ReservationsCard;