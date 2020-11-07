import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <section className="content-section container">
          <h2 className="section-header">ABOUT</h2>
          <img
            className="about-band-image"
            src="/image/logo8.png"
            width="500px"
          />
          <p>
            Closed-circuit television (CCTV), also known as video surveillance,
            is the use of video cameras to transmit a signal to a specific
            place, on a limited set of monitors. It differs from broadcast
            television in that the signal is not openly transmitted, though it
            may employ point-to-point (P2P), point-to-multipoint (P2MP), or mesh
            wired or wireless links. Though almost all video cameras fit this
            definition, the term is most often applied to those used for
            surveillance in areas that may need monitoring such as banks,
            stores, and other areas where security is needed. Though
            videotelephony is seldom called "CCTV" one exception is the use of
            video in distance education, where it is an important tool.
            Surveillance of the public using CCTV is common in many areas around
            the world. In recent years, the use of body worn video cameras has
            been introduced as a new form of surveillance, often used in law
            enforcement, with cameras located on a police officer's chest or
            head. Video surveillance has generated significant debate about
            balancing its use with individuals' right to privacy even when in
            public. In industrial plants, CCTV equipment may be used to observe
            parts of a process from a central control room, for example when the
            environment is not suitable for humans. CCTV systems may operate
            continuously or only as required to monitor a particular event. A
            more advanced form of CCTV, utilizing digital video recorders
            (DVRs), provides recording for possibly many years, with a variety
            of quality and performance options and extra features (such as
            motion detection and email alerts). More recently, decentralized IP
            cameras, perhaps equipped with megapixel sensors, support recording
            directly to network-attached storage devices, or internal flash for
            completely stand-alone operation. There are about 350 million
            surveillance cameras worldwide as of 2016. About 65% of these
            cameras are installed in Asia. The growth of CCTV has been slowing
            in recent years. The deployment of this technology has facilitated a
            significant growth in state surveillance, a substantial rise in the
            methods of advanced social monitoring and control, and a host of
            crime prevention measures throughout the world.
          </p>
          <p>
            When CCTV was first invented it was definitely a "closed circuit"
            but modern CCTV systems are nearly all networkable. The simple fact
            that you can network the system and stream the images over the
            internet, in theory make it an open circuit - of course the signal
            is encrypted and password protected, but it is certainly debatable
            whether it can be classed as a closed circuit. Obviously if you have
            an SD CCTV or HD over Coax system and choose not to physically
            connect it to the network, then it would still be a completely
            closed circuit.
          </p>
          <p>
            As already mentioned above there are several CCTV formats to choose
            from; SD CCTV (also known as Analogue CCTV), HD over Coax CCTV and
            IP CCTV.
          </p>
          <p>
            <b>What format?</b>
          </p>
          <p>
            Choosing the format is the most important decision you will make,
            the formats are not inter-compatible so take plenty of time when
            deciding. To read information about each format click on below
            links:
          </p>
          <div className="row">
            <div className="col-4">
              <a href="#">SD CCTV</a>
            </div>
            <div className="col-4">
              <a href="#">HD over Coax</a>
            </div>
            <div className="row">
              <a href="#">IP CCTV</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
