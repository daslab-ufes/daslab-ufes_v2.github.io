// Generate skill bars
function generateSkillBar(skill, level) {
    const skillBar = document.createElement('div');
    skillBar.className = 'skill_bar';
  
    const info = document.createElement('div');
    info.className = 'info';
  
    const skillName = document.createElement('p');
    skillName.textContent = skill;
  
    const skillLevel = document.createElement('p');
    skillLevel.textContent = level;
  
    info.appendChild(skillName);
    info.appendChild(skillLevel);
  
    const bar = document.createElement('div');
    bar.className = 'bar';
  
    const span = document.createElement('span');
    bar.appendChild(span);
  
    skillBar.appendChild(info);
    skillBar.appendChild(bar);
  
    return skillBar;
  }
  
  // Add skill bars to the skills section
  function addSkillsToSection(skills) {
    const skillsSection = document.getElementById('skills');
  
    skills.forEach((skill) => {
      const skillBar = generateSkillBar(skill.name, skill.level);
      skillBar.classList.add(skill.level.toLowerCase());
      skillsSection.appendChild(skillBar);
    });
  }
  
  // Skills data
  const skillsData = [
    { name: 'Time Series Analysis', level: 'Advanced' },
    { name: 'Linear Algebra', level: 'Intermediate' },
    { name: 'Statistical Inference', level: 'Intermediate' },
    { name: 'Calculus', level: 'Intermediate' },
    { name: 'Nonparametric Statistics', level: 'Intermediate' },
    { name: 'Statistical Computing', level: 'Basic' },
    { name: 'Probability Theory', level: 'Basic' },
    { name: 'Operational Research', level: 'Basic' },
    { name: 'Multivariate Analysis', level: 'Basic' },
  ];
  
  // Call the function to add skills to the section
  addSkillsToSection(skillsData);