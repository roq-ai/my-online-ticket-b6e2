const mapping: Record<string, string> = {
  rentals: 'rental',
  studios: 'studio',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
