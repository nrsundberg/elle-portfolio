import { Button } from "./Button";

export default function Footer() {
  return (
    <div>
      <div
        className="bottom-0 fixed w-full h-12 bg-slate-300 flex center px-2 
      border-2 border-slate-100 border-b-slate-700 border-r-slate-700 items-center"
      >
        <Button onClick={() => console.log("hello")}>Start</Button>
        {/* {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                bottom: "0",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <Link to="/profile" prefetch="render">
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  Profile
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link to="/accounts" prefetch="render">
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  My account
                </Link>
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )} */}
        {/* </div> */}
      </div>
    </div>
  );
}
