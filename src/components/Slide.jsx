import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 0.95 }
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 }
    })
};

// Helper to convert URLs to links
const Linkify = ({ text }) => {
    if (typeof text !== 'string') return text;

    // Regex to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return (
        <>
            {parts.map((part, i) => {
                if (part.match(urlRegex)) {
                    let url = part;
                    let suffix = '';

                    // Remove trailing ')' if present (common when URL is inside parentheses)
                    if (url.endsWith(')')) {
                        url = url.slice(0, -1);
                        suffix = ')';
                    }

                    return (
                        <React.Fragment key={i}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="slide-link"
                                style={{ color: 'var(--accent-secondary)', textDecoration: 'underline', wordBreak: 'break-all' }}
                                onClick={(e) => e.stopPropagation()} // Prevent slide navigation if click event bubbles
                            >
                                {url}
                            </a>
                            {suffix}
                        </React.Fragment>
                    );
                }
                return part;
            })}
        </>
    );
};

// Helper to resolve asset paths for GitHub Pages
const resolvePath = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path; // Ignore external links
    const baseUrl = import.meta.env.BASE_URL.endsWith('/')
        ? import.meta.env.BASE_URL.slice(0, -1)
        : import.meta.env.BASE_URL;
    return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`;
};

export const Slide = ({ slide }) => {
    const Icon = slide.icon;

    return (
        <motion.div
            className="glass-panel slide-container-inner"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Background Icon Watermark */}
            {Icon && (
                <Icon
                    size={400}
                    style={{ position: 'absolute', opacity: 0.03, right: '-50px', bottom: '-50px', transform: 'rotate(-15deg)', zIndex: 0 }}
                />
            )}

            {/* Slide Header */}
            {slide.type !== 'title' && slide.type !== 'end' && slide.type !== 'quote' && (
                <motion.div
                    className="slide-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ width: '100%', marginBottom: '1rem', display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', flexShrink: 0, zIndex: 1 }}
                >
                    {Icon && <Icon size={24} style={{ marginRight: '0.5rem', color: 'var(--accent-primary)' }} />}
                    <h2 style={{ fontSize: 'var(--header-size, 2rem)', margin: 0 }}>{slide.title}</h2>
                </motion.div>
            )}

            {/* Main Content Areas */}
            <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', zIndex: 1, minHeight: 0 }}>

                {/* TITLE SLIDE */}
                {slide.type === 'title' && (
                    <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        >
                            {Icon && <Icon size={80} style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }} />}
                        </motion.div>

                        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>{slide.title}</h1>
                        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--text-secondary)' }}>{slide.subtitle}</p>

                        <motion.div
                            style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '50px' }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            Press Space or Arrow Keys to Start
                        </motion.div>
                    </div>
                )}

                {/* CONTENT / BULLETS */}
                {slide.type === 'content' && (
                    <div style={{ width: '100%', flex: 1, overflowY: 'auto' }}>
                        {Array.isArray(slide.content) ? (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {slide.content.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        custom={i}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="slide-list-item"
                                    >
                                        <span style={{ color: 'var(--accent-secondary)', marginRight: '0.8rem', flexShrink: 0 }}>➤</span>
                                        <Linkify text={item} />
                                    </motion.li>
                                ))}
                            </ul>
                        ) : (
                            <p className="slide-text"><Linkify text={slide.content} /></p>
                        )}
                    </div>
                )}

                {/* SPLIT SLIDE (Text + Text/Image) */}
                {(slide.type === 'split' || slide.type === 'image-split') && (
                    <div className="slide-split">
                        {/* Left Side: Content */}
                        <div className="slide-split-content" style={{ flex: slide.images ? 0.7 : 1 }}>
                            {slide.title && <h2 className="gradient-text slide-title" style={{ display: 'none' }}>{slide.title}</h2>} {/* Hidden duplicated title */}
                            <div className="slide-text" style={{ whiteSpace: 'pre-line' }}>
                                {Array.isArray(slide.content) ? (
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {slide.content.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                custom={i}
                                                variants={contentVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className="slide-list-item"
                                                style={{ alignItems: 'flex-start' }}
                                            >
                                                <span style={{ color: 'var(--accent-secondary)', marginRight: '0.8rem', marginTop: '0.2rem', flexShrink: 0 }}>➤</span>
                                                <Linkify text={item} />
                                            </motion.li>
                                        ))}
                                    </ul>
                                ) : (
                                    <Linkify text={slide.content} />
                                )}
                            </div>
                        </div>

                        {/* Right Side: Subtitle, Image, or Image Grid */}
                        <div className="slide-split-media" style={{ flex: slide.images ? 1.3 : 1 }}>
                            {slide.images ? (
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: slide.imageGridCols === 1 ? '1fr' : '1fr 1fr',
                                    gridAutoRows: 'minmax(0, 1fr)',
                                    gap: '0.5rem',
                                    width: '100%',
                                    height: 'auto', /* Let it grow naturally but constrained by flex */
                                    maxHeight: '70vh', /* Cap it */
                                    padding: '0',
                                    alignContent: 'start'
                                }}>
                                    {slide.images.map((img, idx) => (
                                        <div key={idx} style={{
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                            border: '1px solid var(--glass-border)',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(0,0,0,0.2)'
                                        }}>
                                            <img src={resolvePath(img)} alt={`Slide visual ${idx}`} style={{ width: '100%', height: '100%', objectFit: slide.imageObjectFit || 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                            ) : slide.image ? (
                                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={resolvePath(slide.image)} alt="Slide visual" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />

                                    {/* Specific Privacy Masks */}
                                    {slide.privacyMask && (
                                        <>
                                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6%', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 10 }} />
                                            <div style={{ position: 'absolute', top: '6%', right: 0, width: '35%', height: '8%', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to left, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 80%, transparent 100%)', zIndex: 10 }} />
                                            <div style={{ position: 'absolute', top: '14%', left: 0, width: '100%', height: '6%', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', zIndex: 10 }} />
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '16px' }}>
                                    <h3 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', padding: '2rem', textAlign: 'center' }}>{slide.subtitle}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* STEPS SLIDE */}
                {slide.type === 'steps' && (
                    <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>
                        {slide.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px' }}
                            >
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-primary)',
                                    color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '1rem', flexShrink: 0
                                }}>
                                    {step.num}
                                </div>
                                <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>{step.text}</div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* QUOTE SLIDE */}
                {slide.type === 'quote' && (
                    <div style={{ textAlign: 'center', padding: '2rem', marginTop: 'auto', marginBottom: 'auto' }}>
                        <Star size={60} style={{ color: 'gold', marginBottom: '2rem' }} />
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic', marginBottom: '2rem' }}>{slide.content}</h2>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>— {slide.author}</p>
                    </div>
                )}

                {/* END SLIDE */}
                {slide.type === 'end' && (
                    <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                        <h1 className="gradient-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem' }}>{slide.title}</h1>
                        <p style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>{slide.subtitle}</p>
                    </div>
                )}

            </div>
        </motion.div>
    );
};
