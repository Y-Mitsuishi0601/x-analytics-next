/**
 * Environment configuration with validation and fallbacks
 */

const getApiUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) {
    console.warn('NEXT_PUBLIC_API_URL not found, using fallback');
    return 'http://localhost:8000';
  }
  return url;
};

const getEnvironment = (): 'development' | 'production' => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
  if (env === 'production') return 'production';
  return 'development';
};

export const config = {
  apiUrl: getApiUrl(),
  environment: getEnvironment(),
  isDevelopment: getEnvironment() === 'development',
  isProduction: getEnvironment() === 'production',
} as const;

// Validate configuration on import in development
if (config.isDevelopment) {
  console.log('App Configuration:', {
    apiUrl: config.apiUrl,
    environment: config.environment,
  });
}
