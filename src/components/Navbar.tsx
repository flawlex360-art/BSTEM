import { getDb } from '@/lib/db';
import NavbarClient from './NavbarClient';

export default async function Navbar() {
  const db = getDb();
  return <NavbarClient siteName={db.settings.siteName} />;
}
