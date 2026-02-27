/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#775BF4',
                'primary-glow': 'rgba(119,91,244,0.6)',
                navy: '#111827',
                'navy-light': '#1d2635',
                glass: 'rgba(29,38,53,0.40)',
            },
            backdropBlur: {
                glass: '20px',
            },
            boxShadow: {
                glass: '0 8px 32px 0 rgba(31,38,135,0.37)',
                glow: '0 0 24px rgba(119,91,244,0.5)',
                'glow-strong': '0 0 28px rgba(119,91,244,0.6)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                liquidMorph: {
                    '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                },
                floatUp: {
                    '0%': { transform: 'translateY(0px) scale(1)', opacity: '0.7' },
                    '100%': { transform: 'translateY(-120px) scale(0.5)', opacity: '0' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulseGlow: {
                    '0%,100%': { boxShadow: '0 0 8px rgba(119,91,244,0.4)' },
                    '50%': { boxShadow: '0 0 24px rgba(119,91,244,0.9)' },
                },
            },
            animation: {
                'liquid-morph': 'liquidMorph 8s ease-in-out infinite',
                'float-up': 'floatUp 4s ease-in infinite',
                'slide-in-up': 'slideInUp 0.5s ease forwards',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
