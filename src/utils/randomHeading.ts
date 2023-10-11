import { headings } from '../mock/headingData';

export default function getRandomHeading() {
  const length = headings.length;
  const randomIndex = Math.floor(Math.random() * length);
  return headings[randomIndex];
}
