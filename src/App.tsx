import React from 'react';
import Background from './components/Background';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Background />
      <RegistrationForm />
    </div>
  );
}

export default App;