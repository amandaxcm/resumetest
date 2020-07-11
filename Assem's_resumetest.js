 let resume = {
    Head: ['Assem Akimniyaz, address, phone number, LinkedIn'],
    Certifications: ['Admin, AppBuilder, PD1'],
    Skills: ['Basic HtML and JS, Jira, GitHub, IntelliJ'],
    Experience: [
        {
            title : 'Reservations Agent',
            startDate : 2017,
            endDate : 2020,
            employers : 'Vacasa/Highgate',
            location : 'Key West, FL, the USA',
            info : function (){
              return this.title; this.employers; this.location;
            },
            duration : function() {
                return this.endDate - this.startDate;
            }
        },
        {
            title : 'ESL instructor',
            startDate : 2011,
            endDate : 2016,
            employers : 'S. Baishev AU/K. Zhubanov ARSU/School #15/ELS',
            location : 'Aktobe, Kazakhstan',
            info : function (){
               return this.title; this.employers; this.location;
            },
            duration : function() {
                return this.endDate - this.startDate;
            }
        }
    ],
    Education: [
        { 
            University : 'Suleyman Demirel University',
            Major : 'MA in Education',
            academicYears : 2011-2013,
            location : 'Almaty, Kazakhstan',
            info : function (){
              return this.University; this.Major; this.academicYears; this.location;
            }
        },
        { 
            University : 'Abay KazNPU',
            Major : 'BA in Education',
            academicYears : 2007-2011,
            location : 'Almaty, Kazakhstan',
            info : function (){
              return this.University; this.Major; this.academicYears; this.location;
            }
        }
    ],
    aboutMyself: function (){
        console.log( 'Hi! My name is Assem. I have '+this.Certifications+' certificates.'),
        console.log('I have' ,resume.Experience[1].duration(), ' years of experience in Education and'
             ,resume.Experience[0].duration(), ' years in Hotel Industry.');
    },
    CV: function(){
        console.log('Personal Information: '+this.Head+'')
    },
    Cert: function(){
        console.log('Certificates: '+this.Certifications+'')
    },
    Skilled: function(){
        console.log('Skills: '+this.Skills+'')
    },
    exp: function(){
        console.log('Experience: '+resume.Experience[0].info()+'. '+resume.Experience[1].info()+'');
    },
    edu: function(){
        console.log('Education: '+resume.Education[0].info()+'. '+resume.Education[1].info()+' ')
    },
}
resume.aboutMyself();
resume.Experience[0].duration();
resume.Experience[1].duration();
resume.CV();
resume.Cert();
resume.Skilled();
resume.exp();
resume.Experience[0].info();
resume.Experience[1].info();
resume.edu();
resume.Education[0].info();
resume.Education[1].info();