// to seed activities table, do 'npm run seed' from root directory
const exerciseCtrl = require('../controllers/exerciseCtrl.js');

const exampleExerciseData = [
  { user_id: 1,
    date_performed: '06/01/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/02/2016',
    type: 'weights',
    duration: 60,
    distance: null,
    reps: 30,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/03/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/04/2016',
    type: 'swimming',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/05/2016',
    type: 'weights',
    duration: 60,
    distance: null,
    reps: 30,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/06/2016',
    type: 'walking',
    duration: 60,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/07/2016',
    type: 'walking',
    duration: 60,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/08/2016',
    type: 'weights',
    duration: 45,
    distance: null,
    reps: 45,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/09/2016',
    type: 'walking',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/10/2016',
    type: 'walking',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/11/2016',
    type: 'swimming',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/12/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/13/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/14/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/15/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/16/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/17/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/18/2016',
    type: 'swimming',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/19/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/20/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/21/2016',
    type: 'weights',
    duration: 45,
    distance: null,
    reps: 30,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/22/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/23/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/24/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/25/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/26/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/27/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/28/2016',
    type: 'swimming',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/29/2016',
    type: 'tennis',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/30/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  }
];

exampleExerciseData.forEach((exercise, index) => {
  setTimeout(() => exerciseCtrl.addExercise({ body: exercise }, null), index * 200);
});

setTimeout(process.exit, exampleExerciseData.length * 200);

