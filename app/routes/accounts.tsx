import {
  WindowHeader,
  Window,
  Button,
  Toolbar,
  Frame,
  WindowContent,
} from "react95";
import Footer from "~/components/Footer";

// import linkedInLogo from "../public/linkedin.jpg";

export default function Accounts() {
  return (
    <div className="">
      <Window resizable className="w-[400px] min-h-[200px]">
        <WindowHeader className="flex text-center justify-between">
          <span>Socials</span>
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <p>
            {/* <img src={linkedInLogo} alt="LinkedIn Logo" />  */}
            LinkedIn: When you set &quot;resizable&quot; prop, there will be
            drag handle in the bottom right corner (but resizing itself must be
            handled by you tho!)
          </p>
        </WindowContent>
        <Frame variant="well" className="footer">
          Put some useful information here
        </Frame>
      </Window>

      <Window className="w-[400px] min-h-[200px]">
        <WindowHeader
          active={false}
          className="flex text-center justify-between"
        >
          <span>not-active.exe</span>
          <Button>
            <span className="inline-block w-[16px] h-[16px] ml-[-1px] mt-[-1px] relative" />
          </Button>
        </WindowHeader>
        <WindowContent>I am not active</WindowContent>
      </Window>
      <Footer />
    </div>
  );
}
