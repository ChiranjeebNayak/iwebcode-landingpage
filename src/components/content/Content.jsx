import React from 'react'
import './content.css'
import screenshot from '../assets/img/Screenshot 2021-05-23 at 22.40 1.png'
function Content() {
    return (
        <div className="content-creation container">
            <div className="title">
                <h2 className="content">Content Creations</h2>
            </div>
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-sm-12">
                    <p>Lorem ipsum YouTube dolor sit amet, consectetur adipiscing elit. A nisi, accumsan, ornare donec risus pharetra mattis in. YouTube elit. A nisi, accumsan, ornare donec risus pharetra mattis in. YouTube elit. A nisi, accumsan, ornare donec risus pharetra mattis in.</p>
                    <div>
                    <p><a href="#" >Get in contact about a sponsorship </a></p>
                </div>           
                </div>
                
                <div className="col col-lg-6  col-md-6 col-sm-12">
                    <div className="youtube">
                    <img src={screenshot} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
