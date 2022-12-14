import React from "react";
import SkillCard from "../Components/SkillCard";
import IconCard from "../Components/IconCard";
const Skills = () => {
  return (
    <section id="skill" className="Container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="d-flex justify-content-center font-weight-bold ">
            My skills
          </h1>
          <h2>Programming Languages:</h2>
          <div className="pt-2 pt-lg-1 d-flex mr-auto flex-row">
          <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
           
  
          </div>
          {/*  */}

          <h2>FrameWorks:</h2>
          <div className="pt-2 pt-lg-1 d-flex mr-auto flex-row">
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" />
            
          </div>

          {/*  */}
          <h2>Tools and Technologies:</h2>
          <div className="col-md-10 pt-2 pt-lg-1 d-flex mr-auto flex-row">
            {/* <SkillCard iconsrc="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" /> */}
       
            <SkillCard iconsrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
       <SkillCard iconsrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" />
            <SkillCard iconsrc="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" />
            <SkillCard iconsrc="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
          </div>
        </div>
      </div>
              <div className="justify-content-center  order-lg-2 header-img pt-4">
                        <h2 >Contact me.</h2>
                      </div>
                   <div className="d-flex justify-content-center  order-lg-2 header-img pt-4">
                          <IconCard  
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                  link="https://www.linkedin.com/in/bogesh-wararao-760530221/"/>
             
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                  link="https://github.com/Bogeshwararao"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
                  link="https://twitter.com/BogeshW"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg"
                  link="https://www.hackerrank.com/bogeshwararao121"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                  link="https://www.instagram.com/bogeshwararao/"
                />
                <IconCard
                  iconsrc="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/leetcode.svg"
                  link="https://leetcode.com/bogesh/"
                />
              </div>
    </section>
  );
};

export default Skills;
