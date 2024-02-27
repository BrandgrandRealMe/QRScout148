import { RedHawkLogo } from './RedHawkLogo';
import { RobowranglerLogo } from './RobowranglerLogo';

export function Footer() {
  return (
    <footer>
      <div style=" display=flex; flex-direction=column;" className="mt-8 flex h-24 flex-col items-center justify-center p-2">
        <RobowranglerLogo /> | App by: <br/> <RedHawkLogo /> 
      </div>
    </footer>
  );
}
