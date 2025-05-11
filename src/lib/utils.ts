import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function applyLicensePlateMask(value: string) {
  if (!value) return "";

  const cleanValue = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  const isPlate = /^[A-Z]/.test(cleanValue);

  if (isPlate) {
    if (cleanValue.length <= 3) {
      return cleanValue;
    } else {
      const letters = cleanValue.slice(0, 3);
      const numbers = cleanValue.slice(3, 7);
      return `${letters}-${numbers}`;
    }
  }

  return cleanValue;
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString();
};

export const generateHashFromString = (str: string): number => {
  return str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

export const createTruckIcon = (color: string): google.maps.Icon => {
  const svg = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
    <path fill="${color}" d="M128,10c-48.9,0-88.5,39.6-88.5,88.5c0,48.9,73.8,147.5,88.5,147.5c14.7,0,88.5-98.6,88.5-147.5C216.5,49.6,176.9,10,128,10z M128,171.5c-40.2,0-73-32.8-73-73c0-40.2,32.7-72.9,73-72.9c40.2,0,73,32.7,73,72.9C201,138.7,168.2,171.5,128,171.5z"/>
    <path fill="${color}" d="M172.3,77.5h-25.5V64.1c0-1.5-1.2-2.7-2.7-2.7H79.2c-1.5,0-2.7,1.2-2.7,2.7v4.1v4V77v11.5v4.8V105v4.8v1.7v11h4c0.3,3.3,1.7,6.2,3.9,8.4c2.4,2.4,5.8,3.9,9.5,3.9c3.7,0,7.1-1.5,9.5-3.9l0,0c2.2-2.2,3.6-5.1,3.9-8.4h39.3h0.1h7.9c0.3,3.3,1.7,6.2,3.9,8.4c2.4,2.4,5.8,3.9,9.5,3.9c3.7,0,7.1-1.5,9.5-3.9v0c2.2-2.2,3.6-5.1,3.9-8.4h2.9v-15.3L172.3,77.5z M97.6,125.1c-1,1-2.3,1.5-3.7,1.5c-1.4,0-2.8-0.6-3.7-1.5c-1-1-1.5-2.3-1.5-3.7c0-1.5,0.6-2.8,1.5-3.7l0,0c0.9-0.9,2.3-1.5,3.7-1.5c1.4,0,2.8,0.6,3.7,1.5c1,0.9,1.5,2.3,1.5,3.7C99.1,122.8,98.5,124.1,97.6,125.1z M171.6,125.1c-1,1-2.3,1.5-3.7,1.5c-1.4,0-2.8-0.6-3.7-1.5c-1-1-1.5-2.3-1.5-3.7c0-1.5,0.6-2.8,1.5-3.7l0,0c0.9-0.9,2.3-1.5,3.7-1.5c1.4,0,2.8,0.6,3.7,1.5c1,0.9,1.5,2.3,1.5,3.7C173.1,122.8,172.5,124.1,171.6,125.1z M154.7,106V84.6h11.9l7.7,21.4H154.7z"/>
    </svg>
  `;
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(50, 50),
    anchor: new google.maps.Point(25, 25),
  };
};
