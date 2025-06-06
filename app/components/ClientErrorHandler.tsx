'use client';

import { useEffect } from 'react';

const ClientErrorHandler = () => {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // If the reason is an Event object, convert it to a proper Error
      if (event.reason && typeof event.reason === 'object' && 'type' in event.reason) {
        const properError = new Error(`Event error: ${event.reason.type || 'Unknown event'}`);
        console.error('Converted Event to Error:', properError);
        
        // Prevent the default browser behavior
        event.preventDefault();
        return;
      }
      
      // If it's already an Error object, just log it
      if (event.reason instanceof Error) {
        console.error('Promise rejection with Error:', event.reason.message);
        event.preventDefault();
        return;
      }
      
      // For any other type of rejection, create a proper Error
      const error = new Error(`Unhandled rejection: ${String(event.reason)}`);
      console.error('Promise rejection converted to Error:', error);
      event.preventDefault();
    };

    // Handle general errors
    const handleError = (event: ErrorEvent) => {
      console.error('Global error caught:', event.error);
      
      // If the error is an Event object, convert it to a proper Error
      if (event.error && typeof event.error === 'object' && 'type' in event.error) {
        const properError = new Error(`Event error: ${event.error.type || 'Unknown event'}`);
        console.error('Converted Event to Error:', properError);
        return;
      }
    };

    // Add event listeners
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    // Cleanup
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ClientErrorHandler; 