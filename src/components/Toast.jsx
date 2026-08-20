import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short transition-all duration-300">
      <div className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md border ${
        isSuccess 
          ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-300' 
          : 'bg-slate-900/95 border-rose-500/40 text-rose-300'
      }`}>
        {isSuccess ? (
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        )}
        <span className="text-sm font-medium text-slate-100">{toast.message}</span>
        <button 
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-slate-200 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
