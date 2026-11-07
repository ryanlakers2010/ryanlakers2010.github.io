const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  logo: "images/js-logo.png",

  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T"
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A"
    }
  ],

  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  }
};

// display course info
document.querySelector("#courseName").textContent = aCourse.name;
document.querySelector("#courseCode").textContent = aCourse.code;

// build table rows
function sectionTemplate(section) {
  return `
    <tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>
  `;
}

// render table
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

// initial display
renderSections(aCourse.sections);

// button click
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});
