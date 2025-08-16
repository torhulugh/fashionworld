import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Reach out to us below!</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-media">
        <h3>Follow us on:</h3>
        <ul>
          <li>
            <a
              href="https://facebook.com/fashionworld"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#4267B2"
                style={{ verticalAlign: "middle", marginRight: "6px" }}
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z" />
              </svg>
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/fashionworld"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#1DA1F2"
                style={{ verticalAlign: "middle", marginRight: "6px" }}
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.126-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.025 10.025 0 0 0 2.459-2.548z" />
              </svg>
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/fashionworld"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#E1306C"
                style={{ verticalAlign: "middle", marginRight: "6px" }}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.071-1.276.059-2.687.334-3.678 1.325-.991.991-1.266 2.402-1.325 3.678-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.276.334 2.687 1.325 3.678.991.991 2.402 1.266 3.678 1.325 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.276-.059 2.687-.334 3.678-1.325.991-.991 1.266-2.402 1.325-3.678.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.266-3.678-1.325-1.28-.059-1.688-.071-4.947-.071z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
