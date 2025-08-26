export default function DashboardLayout({
  children,
  lefttop,
  leftBottom,
  rightDashboard,
}) {
  //parallel routing starts with @
  return (
    <>
      <div>
        <div>{children}</div>
        <div style={{ display: "flex", gap:'10px'}}>
          <div
            style={{
             
            }}
          >
            {rightDashboard}
          </div>
          <div
            style={{
              height: "300px",
              width: "300px",
              /* background: #ededed; */
              display: "flex",
              flexDirection: "column",
              gap:'10px'
            }}
          >
            {leftBottom}
            {lefttop}
          </div>
        </div>
      </div>
    </>
  );
}
