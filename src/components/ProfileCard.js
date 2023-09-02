import React, { useEffect } from 'react';

function ProfileCard() {
    useEffect(() => {
        const buttons = document.querySelectorAll(".card-buttons button");
        const sections = document.querySelectorAll(".card-section");
        const card = document.querySelector(".card");

        const handleButtonClick = (e) => {
            const targetSection = e.target.getAttribute("data-section");
            const section = document.querySelector(targetSection);
            targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
            card.setAttribute("data-state", targetSection);
            sections.forEach((s) => s.classList.remove("is-active"));
            buttons.forEach((b) => b.classList.remove("is-active"));
            e.target.classList.add("is-active");
            section.classList.add("is-active");
        };

        buttons.forEach((btn) => {
            btn.addEventListener("click", handleButtonClick);
        });

        // Clean up event listeners on component unmount (optional)
        return () => {
            buttons.forEach((btn) => {
                btn.removeEventListener("click", handleButtonClick);
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

    return (
        <div className='box'>

            <div className="card" data-state="#about">
                <div className="card-header">
                    <div className="card-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" }}></div>
                    <img className="card-avatar" src="/mypic.jpg" alt="avatar" />
                    <h1 className="card-fullname"> Obieze Arinze Kingsley</h1>
                    <h2 className="card-jobtitle">FullStack Web Dev</h2>
                </div>
                <div className="card-main">
                    <div className="card-section is-active" id="about">
                        <div className="card-content">
                            <div className="card-subtitle">About</div>
                            <p className="card-desc"> I am a passionate web Developer with a penchant for
                                innovation.I am constantly pushing boundaries and creating exceptional web projects.
                                I am also a freelancer who has built several projects for clients.
                            </p>
                        </div>
                        <div className="card-social">

                            <a href="https://twitter.com/arinzeobieze">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/gekky_coders/">
                                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                                    <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                                    <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/obieze-arinze-kingsley-4607ba27a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQecZJN%2BcTliKpiANgKkIKA%3D%3D">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                                </svg>
                            </a>

                            <a href="https://github.com/Arinze-Obieze">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-section" id="experience">
                        <div className="card-content">
                            <div className="card-subtitle">WORK EXPERIENCE</div>
                            <div className="card-timeline">
                                <div className="card-item" data-year="2023">
                                    <div className="card-item-title">Front-end Developer at <span>CrowdFunding</span></div>
                                    <div className="card-item-desc">A green project that pools donation to plant Trees</div>
                                </div>

                                <div className="card-item" data-year="2023">
                                    <div className="card-item-title"> i have built several apps  <span>for Clients</span></div>
                                    <div className="card-item-desc"> Including but not limited to an E-Commerce website and a website for a Church. E.t.c </div>
                                </div>

                                <div className="card-item" data-year="2023">
                                    <div className="card-item-title">FullStack Developer at <span>Murlist</span></div>
                                    <div className="card-item-desc"> Currently undergoing a paid internship at Murlist</div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="card-section" id="contact">
                        <div className="card-content">
                            <div className="card-subtitle">CONTACT</div>
                            <div className="card-contact-wrapper">
                                <div className="card-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    Anambra, Nigeria. I also work remotely
                                </div>
                                <div className="card-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    (+234) 916-159-7308
                                </div>
                                <div className="card-contact">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                    arinzeunleashed@gmail.com
                                </div>
                                <button className="contact-me"><a href="https://wa.link/yrksi3" style={{ textDecoration: 'none', color: 'inherit' }}>WORK TOGETHER</a></button>
                            </div>
                        </div>
                    </div>
                    {/* Buttons to handle the sections */}
                    <div className="card-buttons">
                        <button data-section="#about" className="is-active">ABOUT</button>
                        <button data-section="#experience">EXPERIENCE</button>
                        <button data-section="#contact">CONTACT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
