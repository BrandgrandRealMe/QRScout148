import { RedHawkLogo } from './RedHawkLogo';
import { RobowranglerLogo } from './RobowranglerLogo';

export function Footer() {
  return (
    <footer>
      <div className="mt-8 flex h-50 flex-col items-center justify-center p-2">
        <RobowranglerLogo /> | App by: <br/> <RedHawkLogo /> 
      </div>
    </footer>
  );
}
