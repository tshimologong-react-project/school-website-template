import React, { useState } from 'react'


const ApsCalculator = () => {
    const subjects = ['Mathematics', 'LifeScience', 'English','LifeOrientation','PhysicalScience','Geography','HomeLanguge'];
    const marksOptions = ['0-29%', '30-39%', '40-49%','50-59%','60-69%','70-79%','80-100%'];
    const [total,setTotal] = useState(0);
  
  
    const defaultSubject = 'Choose subject';
    const defaultMark = 'Choose marks';
    const defaultLevel = '0';
  
    const [selectedSubjects, setSelectedSubjects] = useState({
      Mathematics: defaultSubject,
      LifeScience: defaultSubject,
      English: defaultSubject,
      LifeOrientation:defaultSubject,
      PhysicalScience:defaultSubject,
      Geography:defaultSubject,
      HomeLanguge:defaultSubject
      
    });
  
    const [selectedMarks, setSelectedMarks] = useState({
      Mathematic: defaultMark,
      LifeScience: defaultMark,
      English: defaultMark,
      LifeOrientation:defaultMark,
      PhysicalScience:defaultMark,
      Geography:defaultMark,
      HomeLanguge:defaultMark
    });
  
  
    const [selectedLevels, setSelectedLevels] = useState({
      Mathematics: defaultLevel,
      LifeScience: defaultLevel,
      English: defaultLevel,
      LifeOrientation:defaultLevel,
      PhysicalScience:defaultLevel,
      Geography:defaultLevel,
      HomeLanguge:defaultLevel
    });
  
    
    
    
  
  
    const handleSubjectChange = (subject, event) => {
      const selectedSubject = event.target.value;
      const updatedSubjects = { ...selectedSubjects };
      setSelectedSubjects(updatedSubjects);
  

      updatedSubjects[subject] = Object.values(selectedSubjects).includes(selectedSubject)
      ? (alert(`You have already selected ${selectedSubject}`), defaultSubject)
      : selectedSubject;

    
    };
  
    const handleMarksChange = (subject, event) => {
      const selectedMark = event.target.value;
      const updatedMarks = { ...selectedMarks };
      updatedMarks[subject] = selectedMark;
      setSelectedMarks(updatedMarks);
  
        
    let level = defaultLevel;
    if (selectedMark === '0-29%') {level = '1';}
    else if (selectedMark === '30-39%') {level = '2';}
    else if (selectedMark === '40-40%') {level = '3';}
    else if (selectedMark === '50-59%') {level = '4';}
    else if (selectedMark === '60-69%') {level = '5';}
    else if (selectedMark === '70-79%') {level = '6';}
    else if (selectedMark === '80-100%') {level = '7';}

   const updatedLevels = { ...selectedLevels };
   updatedLevels[subject] = level;
   setSelectedLevels(updatedLevels);


     
    };
  
    function sumOfLevel(){
      

    };
  
  
    const calculateApsScore = () => {
  
     
   
    };
  
  
  
  
    return (
      <div>
        
        <table>
  
          <thead>
            <tr>
              <th>Subects</th>
              <th>Marks</th>
              <th>Level</th>
            </tr>
          </thead>
  
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject}>
  
                <td>
                  <select
                    value={selectedSubjects[subject]}
                    onChange={(e) => handleSubjectChange(subject, e)}
                  >
                    <option value={defaultSubject}>{defaultSubject}</option>
  
                    {subjects.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
  
                <td>
                  <select
                    value={selectedMarks[subject]}
                    onChange={(e) => handleMarksChange(subject, e)}>
  
                    <option value={defaultMark}>{defaultMark}</option>
                    {marksOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                    </option>
  
                    ))}
                  </select>
                </td>
  
                <td>
                  <h5>{selectedLevels[subject]}</h5>
                </td>
                
  
              </tr>
  
            ))}
          </tbody>
        </table>
        <div>
          <h1>Marks Obtained</h1>
  
  
        </div>
        <button >result</button>
      </div>
    );
  };

export default ApsCalculator
