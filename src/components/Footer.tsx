import { RedHawkLogo } from './RedHawkLogo';
import { RobowranglerLogo } from './RobowranglerLogo';

export function Footer() {
  return (
    <footer>
      <div className="mt-8 flex h-24 flex-col items-center justify-center p-2">
        <RobowranglerLogo />  <br>
        App by: <br>
        <RedHawkLogo /> 
      </div>
    </footer>
  );
}
