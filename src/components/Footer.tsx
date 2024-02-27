import { RedHawkLogo } from './RedHawkLogo';
import { RobowranglerLogo } from './RobowranglerLogo';

export function Footer() {
  return (
    <footer>
      <div style="display: flex; justify-content: center; align-items: center; height: 150px;" className="mt-8 items-center p-2">
        <RobowranglerLogo /> | App by: <br/> <RedHawkLogo /> 
      </div>
    </footer>
  );
}
