import { useState } from 'react';
import './LoadingSpinner.scss'


export const LoadingSpinner = () => (
        <div className="spinner-container">
          <div className="loading-spinner">
          </div>
        </div>
)

// {isLoading && <LoadingSpinner />}