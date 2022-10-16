
export default function Header() {
  return (
    <div>
    <Header className="flex justify-between items-center">
        <div>
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer"/>
        </div>
        <div>
            <ul>
                <li>home</li>
                <li>Offers</li>
                <li>Sign in</li>
            </ul>
        </div>
    </Header>

    </div>
  );
}
