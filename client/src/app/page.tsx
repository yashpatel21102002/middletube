"use client"

const LoginPage: React.FC = () => {
  const getToken = ()=>{
    const url = window.location.href;
    console.log(url)
  }
  getToken()
  return (
    <div>
      <h1>This Is Middletube</h1>
    </div>
  );
};

export default LoginPage;
