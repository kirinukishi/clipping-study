import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Slide } from './Slide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Deck = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(curr => curr + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(curr => curr - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    return (
        <div className="slide-container">
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AnimatePresence mode='wait'>
                    <Slide key={currentSlide} slide={slides[currentSlide]} />
                </AnimatePresence>
            </div>

            {/* Navigation Controls (Visible on hover or mobile) */}
            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', display: 'flex', gap: '1rem', zIndex: 10 }}>
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    style={{
                        background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white',
                        padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', opacity: currentSlide === 0 ? 0.3 : 1
                    }}
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    style={{
                        background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white',
                        padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', opacity: currentSlide === slides.length - 1 ? 0.3 : 1
                    }}
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Progress Bar */}
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                        transition: 'width 0.3s ease'
                    }}
                />
            </div>

            {/* Slide Counter */}
            <div style={{ position: 'absolute', bottom: '1rem', left: '2rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                {currentSlide + 1} / {slides.length}
            </div>
        </div>
    );
};
