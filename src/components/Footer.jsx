import { church } from '../siteData.js';

export default function Footer() {
  return <footer><strong>KABOD</strong> · {church.ministry}<br />{church.address}</footer>;
}
