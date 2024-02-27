import { RedHawkLogo } from './RedHawkLogo';
import { RobowranglerLogo } from './RobowranglerLogo';

export function Footer() {
  return (
    <footer>
      <div style="display: flex; justify-content: center; align-items: center; height: 24;" className="mt-8 h-24 items-center p-2">
        <RobowranglerLogo /> | App by: <br/> <RedHawkLogo /> 
      </div>
    </footer>
  );
}
