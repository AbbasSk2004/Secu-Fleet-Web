import Link from 'next/link';

export default function AppDevelopmentHeader() {
  return (
    <div className="container-fluid bg-primary py-5 bg-headerApp" style={{ marginBottom: '90px' }}>
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">App Development</h1>
          <Link href="/" className="h5 text-white text-decoration-none">
            Home
          </Link>
          <i className="far fa-circle text-white px-2"></i>
          <Link href="/service/app-development" className="h5 text-white text-decoration-none">
            App Development
          </Link>
        </div>
      </div>
    </div>
  );
} 