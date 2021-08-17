import React from "react";
import "./sayhello.css";
function Sayhello() {
    return (
        <div className="sayhello container">
            <div className="title">
                <h2 className="content">Say Hello</h2>
            </div>
            <div className="row">
                <div className="col col-lg-6 col-sm-12">
                    <div className="sayhello-title">
                        <h4>
                            Looking to start a new project or just want to say hi? Send me an
                            email and I’ll do my best to reply within 24 hrs!
                        </h4>
                    </div>
                    <h4 className="sayhello-subtitle">
                        If contact forms aren’t your thing... send me an email at
                        hello@arnau.design
                    </h4>
                </div>
                <div className="col col-lg-6 col-sm-12">
                    <form action="#">
                        <div className="row">
                            <label>Name*</label>
                            <div className="col">
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="col">
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label>Inquiry*</label>
                                <br></br>
                                <select name="inquiry" id="1">
                                    <option id="2">colab/Client</option>
                                    <option id="2">colab/Client</option>
                                    <option id="2">colab/Client</option>
                                </select>
                            </div>
                            <div className="col">
                                <label>Email*</label>
                                <br></br>
                                <input type="email" placeholder="hello@desgin.com" />
                            </div>
                        </div>

                        <div className="row message">
                            <label>Message</label>
                            <textarea className="message" placeholder="Hello..."></textarea>
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="blog">
                    Recent Blogs
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 blogcard">
                    <p className="blogtitle">
                        Competition: win a N02 Recycle counter chair by Nendo for Fritz Hansen
                    </p>
                    <p className="date">24.09.21</p>
                    <a className="bloglink">See Now</a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 blogcard">
                    <p className="blogtitle">
                        Competition: win a N02 Recycle counter chair by Nendo for Fritz Hansen
                    </p>
                    <p className="date">24.09.21</p>
                    <a className="bloglink">See Now</a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 blogcard">
                    <p className="blogtitle">
                        Competition: win a N02 Recycle counter chair by Nendo for Fritz Hansen
                    </p>
                    <p className="date">24.09.21</p>
                    <a className="bloglink">See Now</a>
                </div>
            </div>
        </div>
    );
}

export default Sayhello;
