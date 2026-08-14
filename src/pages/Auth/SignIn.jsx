import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AcornLogo = ({ size = 32 }) => (
  <div className="flex items-center gap-2.5 justify-center">
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Stem */}
      <path d="M20 3V7" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
      {/* Acorn Cap */}
      <path d="M10 13C10 9.68629 12.6863 7 16 7H24C27.3137 7 30 9.68629 30 13V15H10V13Z" fill="#38bdf8" />
      {/* Cap texture dots */}
      <circle cx="14" cy="11" r="1" fill="#0284c7" />
      <circle cx="20" cy="11" r="1" fill="#0284c7" />
      <circle cx="26" cy="11" r="1" fill="#0284c7" />
      {/* Acorn Body */}
      <path d="M10 16H30C30 16 30 25.5 20 33C10 25.5 10 16 10 16Z" fill="#38bdf8" />
      <path d="M13 18C13 18 14 24.5 20 28.5C26 24.5 27 18 27 18" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" fill="none" />
    </svg>
    <span className="text-xl font-bold text-white tracking-tight">Acorn</span>
  </div>
);

const GoogleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const EyeIcon = ({ show }) => (
  <svg className="w-4 h-4 text-[#6b7280] hover:text-[#9ca3af] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {show ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
    ) : (
      <>
        <circle cx="12" cy="12" r="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </>
    )}
  </svg>
);

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'info@acorn.dev',
    password: '••••••••'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage('Signed in successfully! Redirecting...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }, 800);
  };

  const handleSocialClick = (provider) => {
    setToastMessage(`Signing in with ${provider}...`);
    setTimeout(() => {
      setToastMessage('');
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-[#38bdf8] text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2 animate-bounce">
          <span>✓</span> {toastMessage}
        </div>
      )}

      {/* Main Card */}
      <div className="w-full max-w-[440px] bg-[#18191e] border border-[#272932] rounded-[28px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Acorn Logo */}
        <div className="mb-6">
          <AcornLogo size={34} />
        </div>

        {/* Heading */}
        <div className="text-left mb-6">
          <h1 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight">Sign in</h1>
          <p className="text-[#989da8] text-xs leading-relaxed mt-1">
            Access your account quickly and securely to get started.
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            type="button"
            onClick={() => handleSocialClick('Google')}
            className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#21232b] hover:bg-[#282b35] border border-[#2f323e] rounded-xl text-xs font-semibold text-white transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <GoogleIcon />
            <span>Sign in with Google</span>
          </button>
          <button
            type="button"
            onClick={() => handleSocialClick('GitHub')}
            className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#21232b] hover:bg-[#282b35] border border-[#2f323e] rounded-xl text-xs font-semibold text-white transition-all shadow-sm cursor-pointer active:scale-95"
          >
            <GitHubIcon />
            <span>Sign in with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="border-t border-[#2a2c36] w-full"></div>
          <span className="bg-[#18191e] px-3 text-[10px] font-bold tracking-widest text-[#666b78] uppercase absolute">
            OR
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="text-left">
            <label className="block text-xs font-bold text-[#d1d5db] mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="info@acorn.dev"
              required
              className="w-full px-4 py-2.5 bg-[#21232b] border border-[#2f323e] focus:border-[#38bdf8] rounded-xl text-xs text-white placeholder-[#6b7280] outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div className="text-left">
            <label className="block text-xs font-bold text-[#d1d5db] mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 pr-10 bg-[#21232b] border border-[#2f323e] focus:border-[#38bdf8] rounded-xl text-xs text-white placeholder-[#6b7280] outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1"
                aria-label="Toggle password visibility"
              >
                <EyeIcon show={showPassword} />
              </button>
            </div>
          </div>

          {/* Reset Password */}
          <div className="text-center pt-1 pb-1">
            <Link
              to="/auth/password-reset"
              className="text-xs text-[#989da8] hover:text-[#38bdf8] transition-colors font-medium"
            >
              Reset Password
            </Link>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#38bdf8] hover:bg-[#0284c7] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#38bdf8]/20 text-xs sm:text-sm cursor-pointer disabled:opacity-50 active:scale-98"
          >
            {isLoading ? 'Signing in...' : 'Continue'}
          </button>
        </form>

        {/* Legal Disclaimer */}
        <p className="text-[11px] text-[#888d9a] text-center mt-4 leading-normal">
          By clicking Continue, Sign in with Google, or Sign in with GitHub, you agree to the{' '}
          <Link to="/auth/terms-and-conditions" className="text-[#38bdf8] font-medium hover:underline">
            Terms and Conditions
          </Link>{' '}
          and{' '}
          <Link to="/auth/privacy-policy" className="text-[#38bdf8] font-medium hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Card Footer Divider */}
        <div className="border-t border-[#262832] my-6"></div>

        {/* Bottom Get Started */}
        <div className="text-left">
          <h3 className="text-sm font-bold text-white mb-0.5">Get Started</h3>
          <p className="text-xs text-[#989da8]">
            New to Acorn? Please use your email to{' '}
            <Link to="/auth/sign-up" className="text-[#38bdf8] font-medium hover:underline">
              sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
