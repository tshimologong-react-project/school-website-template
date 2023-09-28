import React, { useState } from 'react'


const ApsCalculator = () => {
  const subjects = [
  
    'HomeLanguge',
    'English',
    'Mathematics',
    'MathematicalLit',
    'PhysicalScience',
    'Accounting',
    'LifeScience',
    'Geography',
    'History',
    'Economics',
    'BusinessStudies',
    'Tourism',
    'ConsumerStudies',
    'HospitalityStudies',
    'AgriculturalSciences',
    'AdditionalSubject1',
    'AdditionalSubject2',
    'AdditionalSubject3',
    'AdditionalSubject4'
    // Add more subjects here as needed

  ];
    const marksOptions = ['0-29%', '30-39%', '40-49%','50-59%','60-69%','70-79%','80-100%'];
    const [total,setTotal] = useState(0);
  
  // comenting
    
  const defaultSubject = 'Choose subject';
  const defaultMark = 'Choose marks';
  const defaultLevel = '0';

  const [selectedSubjects, setSelectedSubjects] = useState({
  
    HomeLanguge: defaultSubject,
    English: defaultSubject,
    Mathematics: defaultSubject,
    MathematicalLit:defaultSubject,
    PhysicalScience:defaultSubject,
    Accounting:defaultSubject
    
  });

  const [selectedMarks, setSelectedMarks] = useState({

    HomeLanguge: defaultMark,
    English: defaultMark,
    Mathematics: defaultMark,
    MathematicalLit:defaultMark,
    PhysicalScience:defaultMark,
    Accounting:defaultMark
  });


  const [selectedLevels, setSelectedLevels] = useState({

    HomeLanguge: defaultLevel,
    English: defaultLevel,
    Mathematics: defaultLevel,
    MathematicalLit:defaultLevel,
    PhysicalScience:defaultLevel,
    Accounting:defaultLevel
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
      const selectedMarksValues = Object.values(selectedLevels);
      const validMarks = selectedMarksValues.filter(
        (mark) => mark !== defaultLevel
      );
      const sum = validMarks.reduce(
        (accumulator, currentMark) =>
          accumulator + parseInt(currentMark),
        0
      );
      setTotal(sum)

    };
  
  
    const calculateApsScore = () => {
      const allSubjectsSelected = Object.values(selectedSubjects).find((unselectedSubject)=>unselectedSubject===defaultSubject);
    const allLevesSelected = Object.values(selectedLevels).find((unselectedMarks)=>unselectedMarks===defaultLevel)
   
    {(allSubjectsSelected || allLevesSelected) ?  alert('field of subject or marks is required') : sumOfLevel()};
     
   
    };
  
  
  
  
    return (
      <div>
        
        <table>
  
          <thead>
            <tr>
              <th>Subjects</th>
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
          <h1>RESULTS</h1>
  
          {total}
        </div>
        <button onClick={calculateApsScore} >result</button>
      </div>
    );
  };

export default ApsCalculator