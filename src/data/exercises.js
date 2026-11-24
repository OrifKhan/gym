// Exercise library. `pattern` keys into poses.js for the illustration pair, used whenever
// `media` (a local real demonstration GIF from the open ExerciseDB dataset, oss.exercisedb.dev)
// is not present. `purpose` explains why the exercise is in the program; `recommendedRIR` is
// general exercise-level intensity guidance (the week-specific RIR target lives in program.js).
// `alternative` references another exercise id in this same file.
export const EXERCISES = [
  {
    "id": "barbell-bench-press",
    "nameEn": "Barbell Bench Press",
    "nameRu": "Жим штанги лёжа",
    "category": "Chest",
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Chest",
      "Triceps",
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Core"
    ],
    "purpose": "The core pressing lift for building upper-body mass and strength — heavy, progressive bench pressing is what turns a flat chest into a strong, athletic one, and the pressing strength carries directly into MMA clinch and strike power.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/barbell-bench-press.gif",
    "startingPosition": "Lie flat on the bench with eyes under the bar, feet planted firmly on the floor, and a slight natural arch in the lower back. Grip the bar slightly wider than shoulder width.",
    "steps": [
      "Unrack the bar and hold it directly over your chest with arms extended.",
      "Lower the bar under control to the mid-chest, elbows at roughly 45-60 degrees.",
      "Touch the chest lightly without bouncing.",
      "Drive the bar back up to full lockout, pushing your feet into the floor."
    ],
    "bodyPosition": "Shoulder blades retracted and pinned to the bench, chest up, glutes and feet stay in contact throughout.",
    "rangeOfMotion": "Bar travels from arms fully extended down to lightly touching the mid-chest, then back to full extension.",
    "breathing": {
      "inhale": "Inhale and brace your core as you lower the bar.",
      "exhale": "Exhale forcefully as you press the bar back up."
    },
    "mistakes": [
      "Bouncing the bar off the chest",
      "Flaring elbows to 90 degrees",
      "Lifting hips off the bench",
      "Uneven bar path"
    ],
    "safetyNotes": "Always use a spotter or safety bars when attempting a near-maximal weight; keep the wrists stacked directly over the elbows to avoid wrist strain.",
    "sets": 4,
    "reps": "6-8",
    "restSec": 120,
    "alternative": "incline-dumbbell-press"
  },
  {
    "id": "incline-dumbbell-press",
    "nameEn": "Incline Dumbbell Press",
    "nameRu": "Жим гантелей на наклонной скамье",
    "category": "Chest",
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Upper Chest",
      "Front Delts",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Core"
    ],
    "purpose": "Targets the upper chest and front shoulders that flat pressing misses, filling out the chest for a more complete, athletic upper body while building raw pressing strength.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/incline-dumbbell-press.gif",
    "startingPosition": "Sit on a bench set to 30-45 degrees, a dumbbell in each hand resting at shoulder level, palms facing forward.",
    "steps": [
      "Press both dumbbells up and slightly inward until arms are extended.",
      "Pause briefly at the top without locking out aggressively.",
      "Lower the dumbbells under control back to shoulder level.",
      "Keep wrists stacked over elbows throughout."
    ],
    "bodyPosition": "Shoulder blades retracted, feet flat on the floor, lower back lightly arched against the bench.",
    "rangeOfMotion": "Dumbbells travel from shoulder level to full overhead extension without locking the elbows aggressively.",
    "breathing": {
      "inhale": "Inhale on the way down.",
      "exhale": "Exhale as you press up."
    },
    "mistakes": [
      "Letting dumbbells drift too wide",
      "Excessive bench angle turning it into a shoulder press",
      "Banging dumbbells together at the top"
    ],
    "safetyNotes": "Keep the bench angle at 30-45°; a steeper angle shifts load to the front delts and increases shoulder strain.",
    "sets": 3,
    "reps": "8-10",
    "restSec": 90,
    "alternative": "barbell-bench-press"
  },
  {
    "id": "push-up",
    "nameEn": "Push-Up",
    "nameRu": "Отжимания от пола",
    "category": "Chest",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Chest",
      "Triceps",
      "Core"
    ],
    "secondaryMuscles": [
      "Core",
      "Serratus Anterior"
    ],
    "purpose": "A foundational bodyweight pressing movement — builds chest/triceps endurance and strength with zero equipment, making it ideal for warm-ups, finishers, or training away from the gym.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/push-up.gif",
    "startingPosition": "Plank position with hands slightly wider than shoulders, body in a straight line from head to heels.",
    "steps": [
      "Brace your core and lower your body as one unit.",
      "Lower until your chest is just above the floor, elbows ~45 degrees.",
      "Push back up to full arm extension without locking out aggressively."
    ],
    "bodyPosition": "Neutral spine, hips in line with shoulders and ankles, head neutral.",
    "rangeOfMotion": "Chest lowers to within a few centimeters of the floor, then returns to full arm extension.",
    "breathing": {
      "inhale": "Inhale on the way down.",
      "exhale": "Exhale while pressing up."
    },
    "mistakes": [
      "Hips sagging or piking up",
      "Flaring elbows straight out to the sides",
      "Partial range of motion"
    ],
    "safetyNotes": "Keep the body rigid from head to heels throughout — a sagging lower back increases spinal load.",
    "sets": 3,
    "reps": "15-20",
    "restSec": 60,
    "alternative": "barbell-bench-press"
  },
  {
    "id": "dumbbell-chest-fly",
    "nameEn": "Dumbbell Chest Fly",
    "nameRu": "Разведение гантелей лёжа",
    "category": "Chest",
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Chest"
    ],
    "secondaryMuscles": [
      "Front Delts"
    ],
    "purpose": "An isolation move that stretches and shapes the chest without taxing the shoulders as much as pressing — adds muscle detail and balances out the heavier compound lifts.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/dumbbell-chest-fly.gif",
    "startingPosition": "Lying on a flat bench, dumbbells held above the chest with a slight bend in the elbows, palms facing each other.",
    "steps": [
      "Lower the dumbbells out to the sides in a wide arc, keeping the elbow bend constant.",
      "Stop once you feel a stretch across the chest, roughly in line with the shoulders.",
      "Squeeze the chest to bring the dumbbells back up along the same arc."
    ],
    "bodyPosition": "Shoulder blades retracted, feet planted, slight natural lower back arch.",
    "rangeOfMotion": "Arms travel from overhead with a slight bend down to a wide stretch roughly level with the shoulders.",
    "breathing": {
      "inhale": "Inhale while lowering the weights.",
      "exhale": "Exhale while bringing them together."
    },
    "mistakes": [
      "Straightening the elbows into a pressing motion",
      "Lowering too deep and stressing the shoulder joint",
      "Using momentum instead of control"
    ],
    "safetyNotes": "Do not lower past a comfortable shoulder stretch — overstretching the chest under load is a common cause of pec strain.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "cable-chest-press"
  },
  {
    "id": "cable-chest-press",
    "nameEn": "Cable Chest Press",
    "nameRu": "Жим в кроссовере",
    "category": "Chest",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Chest",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Keeps constant tension on the chest through the whole range of motion, which builds muscle efficiently with less joint stress than barbell pressing — useful on higher-volume weeks.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/cable-chest-press.gif",
    "startingPosition": "Standing in a split stance between cable pulleys set at chest height, handles in each hand.",
    "steps": [
      "Press both handles forward until arms are extended in front of the chest.",
      "Control the return, allowing the handles back to chest level without letting the weight stack slam."
    ],
    "bodyPosition": "Slight forward lean from the split stance, core braced, chest tall.",
    "rangeOfMotion": "Handles travel from chest level to full arm extension in front of the body.",
    "breathing": {
      "inhale": "Inhale during the return.",
      "exhale": "Exhale while pressing forward."
    },
    "mistakes": [
      "Leaning too far forward to cheat the weight",
      "Shrugging shoulders up toward the ears"
    ],
    "safetyNotes": "Keep a slight forward lean from the split stance rather than the lower back to avoid lumbar strain.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "push-up"
  },
  {
    "id": "decline-bench-press",
    "nameEn": "Decline Barbell Press",
    "nameRu": "Жим штанги на скамье с отрицательным наклоном",
    "category": "Chest",
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "difficulty": "Advanced",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Lower Chest",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Serratus Anterior",
      "Core"
    ],
    "purpose": "Emphasizes the lower chest fibers that flat and incline pressing underwork, rounding out full chest development for a more athletic, proportional upper body.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/decline-bench-press.gif",
    "startingPosition": "Secure your feet on the decline bench, lie back and grip the bar slightly wider than shoulder width.",
    "steps": [
      "Unrack the bar and lower it to the lower chest under control.",
      "Press the bar back up to full lockout over the chest."
    ],
    "bodyPosition": "Shoulder blades pinned back, core tight to prevent sliding down the bench.",
    "rangeOfMotion": "Bar travels from full extension down to the lower chest.",
    "breathing": {
      "inhale": "Inhale lowering the bar.",
      "exhale": "Exhale pressing up."
    },
    "mistakes": [
      "Bouncing the bar off the chest",
      "Sliding down the bench mid-set"
    ],
    "safetyNotes": "Use a spotter and secure footholds — the decline angle makes it easy to slide during heavier sets.",
    "sets": 3,
    "reps": "8-10",
    "restSec": 100,
    "alternative": "barbell-bench-press"
  },
  {
    "id": "chest-dip",
    "nameEn": "Chest Dip",
    "nameRu": "Отжимания на брусьях (грудь)",
    "category": "Chest",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Lower Chest",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Front Delts",
      "Core"
    ],
    "purpose": "A demanding bodyweight compound move that builds serious chest and triceps strength and mass using just your own bodyweight — a great strength benchmark as you progress.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/chest-dip.gif",
    "startingPosition": "Support yourself on parallel bars with arms extended, torso leaning forward slightly.",
    "steps": [
      "Lower your body by bending the elbows, leaning forward to bias the chest.",
      "Descend until shoulders are near elbow height.",
      "Press back up to full arm extension."
    ],
    "bodyPosition": "Forward torso lean, elbows flaring slightly outward, core braced.",
    "rangeOfMotion": "Shoulders lower until roughly level with the elbows, then press back to full arm extension.",
    "breathing": {
      "inhale": "Inhale on the way down.",
      "exhale": "Exhale pressing up."
    },
    "mistakes": [
      "Staying too upright (shifts to triceps)",
      "Going so deep it strains the shoulder",
      "Using momentum/swinging"
    ],
    "safetyNotes": "Stop the descent if you feel anterior shoulder pinching — going too deep stresses the shoulder joint.",
    "sets": 3,
    "reps": "8-12",
    "restSec": 90,
    "alternative": "push-up"
  },
  {
    "id": "deadlift",
    "nameEn": "Barbell Deadlift",
    "nameRu": "Тяга штанги с пола",
    "category": "Back",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Advanced",
    "pattern": "hinge",
    "targetMuscles": [
      "Back",
      "Glutes",
      "Hamstrings",
      "Core"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Traps",
      "Forearms"
    ],
    "purpose": "Arguably the single best exercise for total-body strength — it builds the posterior chain (back, glutes, hamstrings) that underpins every athletic movement, from sprinting to grappling takedowns.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/deadlift.gif",
    "startingPosition": "Bar over mid-foot, shins close to the bar, hips higher than knees, flat back, grip just outside the knees.",
    "steps": [
      "Take the slack out of the bar and brace your core.",
      "Drive through the floor, keeping the bar close to the shins as you stand up.",
      "Lock out by extending the hips, standing fully tall.",
      "Reverse the motion under control, hinging back to the floor."
    ],
    "bodyPosition": "Neutral spine throughout, chest up, lats engaged to keep the bar close.",
    "rangeOfMotion": "Bar travels from the floor to full hip and knee extension at lockout.",
    "breathing": {
      "inhale": "Inhale and brace before lifting.",
      "exhale": "Exhale after passing the knees at the top."
    },
    "mistakes": [
      "Rounding the lower back",
      "Bar drifting away from the shins",
      "Hyperextending at the top",
      "Jerking the bar off the floor"
    ],
    "safetyNotes": "Never round the lower back under load; if you cannot keep a neutral spine at a given weight, reduce the load rather than grinding the rep.",
    "sets": 4,
    "reps": "5",
    "restSec": 150,
    "alternative": "romanian-deadlift"
  },
  {
    "id": "bent-over-row",
    "nameEn": "Bent-Over Barbell Row",
    "nameRu": "Тяга штанги в наклоне",
    "category": "Back",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPull",
    "targetMuscles": [
      "Lats",
      "Mid-Back",
      "Biceps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Forearms"
    ],
    "purpose": "Builds a thick, strong back and improves posture — a strong back balances out all the pressing work and is essential for grip and pulling power in wrestling and MMA clinch work.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/bent-over-row.gif",
    "startingPosition": "Hinge forward to about 45 degrees with a flat back, bar hanging at arm's length, grip shoulder width.",
    "steps": [
      "Pull the bar toward the lower ribs, driving the elbows back.",
      "Squeeze the shoulder blades together at the top.",
      "Lower the bar under control back to full arm extension."
    ],
    "bodyPosition": "Flat back maintained throughout, knees softly bent, core braced.",
    "rangeOfMotion": "Bar travels from arms extended toward the floor up to contact with the lower ribs.",
    "breathing": {
      "inhale": "Inhale as the bar lowers.",
      "exhale": "Exhale pulling the bar up."
    },
    "mistakes": [
      "Rounding the back",
      "Standing too upright",
      "Using momentum/jerking the weight"
    ],
    "safetyNotes": "Maintain the hip-hinge position throughout — standing up partway through the set shifts load onto the lower back.",
    "sets": 4,
    "reps": "8-10",
    "restSec": 100,
    "alternative": "one-arm-dumbbell-row"
  },
  {
    "id": "lat-pulldown",
    "nameEn": "Lat Pulldown",
    "nameRu": "Тяга верхнего блока",
    "category": "Back",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "verticalPull",
    "targetMuscles": [
      "Lats",
      "Biceps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Forearms"
    ],
    "purpose": "Builds pulling strength and width in the back in a controlled, joint-friendly way, making it a great way to work toward strict pull-ups while adding upper-body muscle.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/lat-pulldown.gif",
    "startingPosition": "Seated with thighs locked under the pad, grip the bar wider than shoulder width, arms extended overhead.",
    "steps": [
      "Pull the bar down toward the upper chest, driving elbows down and back.",
      "Pause briefly, squeezing the lats.",
      "Let the bar rise back under control to full extension."
    ],
    "bodyPosition": "Slight backward lean, chest up, avoid using body weight to yank the bar down.",
    "rangeOfMotion": "Bar travels from full overhead arm extension down to the upper chest.",
    "breathing": {
      "inhale": "Inhale as the bar rises.",
      "exhale": "Exhale pulling down."
    },
    "mistakes": [
      "Leaning back excessively",
      "Pulling behind the neck",
      "Using only the arms instead of the lats"
    ],
    "safetyNotes": "Avoid pulling the bar behind the neck — it puts the shoulder in a vulnerable, unnecessary position.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "pull-up"
  },
  {
    "id": "pull-up",
    "nameEn": "Pull-Up",
    "nameRu": "Подтягивания",
    "category": "Back",
    "equipment": [
      "Pull-up Bar",
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "verticalPull",
    "targetMuscles": [
      "Lats",
      "Biceps",
      "Core"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Forearms",
      "Core"
    ],
    "purpose": "A gold-standard bodyweight strength test — builds back, grip, and core strength that transfers directly to climbing, grappling control, and overall athletic upper-body power.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/pull-up.gif",
    "startingPosition": "Hang from the bar with an overhand grip slightly wider than shoulders, arms fully extended.",
    "steps": [
      "Pull your chest toward the bar, driving the elbows down.",
      "Get your chin over the bar at the top.",
      "Lower back down under control to a full hang."
    ],
    "bodyPosition": "Core braced to prevent excessive swinging, shoulders engaged even at the bottom.",
    "rangeOfMotion": "Body travels from a full dead hang to chin above the bar.",
    "breathing": {
      "inhale": "Inhale at the bottom of the hang.",
      "exhale": "Exhale as you pull up."
    },
    "mistakes": [
      "Kipping/swinging for momentum",
      "Partial range of motion",
      "Shrugging without engaging the lats"
    ],
    "safetyNotes": "Avoid kipping or swinging on heavier sets — uncontrolled momentum adds shear stress to the shoulders.",
    "sets": 4,
    "reps": "6-10",
    "restSec": 120,
    "alternative": "lat-pulldown"
  },
  {
    "id": "seated-cable-row",
    "nameEn": "Seated Cable Row",
    "nameRu": "Тяга нижнего блока",
    "category": "Back",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "horizontalPull",
    "targetMuscles": [
      "Mid-Back",
      "Lats",
      "Biceps"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Forearms"
    ],
    "purpose": "Builds mid-back thickness and reinforces good posture, which protects the spine and shoulders under heavier lifts and during long training sessions.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/seated-cable-row.gif",
    "startingPosition": "Seated with feet on the platform, knees slightly bent, grip the handle with arms extended.",
    "steps": [
      "Pull the handle toward the torso, leading with the elbows.",
      "Squeeze the shoulder blades together at the end range.",
      "Extend the arms back out under control."
    ],
    "bodyPosition": "Tall spine, slight forward lean on the stretch, avoid rounding the lower back.",
    "rangeOfMotion": "Handle travels from arms extended at the stretch to the torso at the lower ribs.",
    "breathing": {
      "inhale": "Inhale during the extension.",
      "exhale": "Exhale during the pull."
    },
    "mistakes": [
      "Rounding the back on the stretch",
      "Using the arms only, not the back",
      "Leaning too far back at the finish"
    ],
    "safetyNotes": "Keep a tall spine throughout; rounding forward on the stretch and snapping back is a common cause of lower-back irritation.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "bent-over-row"
  },
  {
    "id": "one-arm-dumbbell-row",
    "nameEn": "One-Arm Dumbbell Row",
    "nameRu": "Тяга гантели одной рукой в наклоне",
    "category": "Back",
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPull",
    "targetMuscles": [
      "Lats",
      "Mid-Back"
    ],
    "secondaryMuscles": [
      "Rear Delts",
      "Core"
    ],
    "purpose": "Trains each side of the back independently, fixing left/right strength imbalances and building the core stability needed for rotational power in striking.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/one-arm-dumbbell-row.gif",
    "startingPosition": "One knee and hand supported on a bench, back flat and roughly parallel to the floor, dumbbell hanging in the free hand.",
    "steps": [
      "Pull the dumbbell up toward the hip, driving the elbow back and up.",
      "Pause and squeeze at the top.",
      "Lower under control to a full stretch."
    ],
    "bodyPosition": "Flat back, hips square, avoid rotating the torso to help lift the weight.",
    "rangeOfMotion": "Dumbbell travels from a full stretch toward the floor up to the hip.",
    "breathing": {
      "inhale": "Inhale lowering the weight.",
      "exhale": "Exhale on the pull."
    },
    "mistakes": [
      "Twisting the torso to cheat the rep",
      "Rounding the back",
      "Using too light a weight with a jerky tempo"
    ],
    "safetyNotes": "Keep the hips square to the bench — rotating the torso to heave the weight up increases spinal rotation under load.",
    "sets": 3,
    "reps": "10 per side",
    "restSec": 75,
    "alternative": "seated-cable-row"
  },
  {
    "id": "superman",
    "nameEn": "Superman Hold",
    "nameRu": "Упражнение «супермен»",
    "category": "Back",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "corePlank",
    "targetMuscles": [
      "Lower Back",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Rear Delts"
    ],
    "purpose": "Strengthens the lower back and glutes to protect the spine during heavy lifts like squats and deadlifts, and supports the hip extension power used in sprinting and takedowns.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "startingPosition": "Lying face down with arms extended overhead and legs straight.",
    "steps": [
      "Simultaneously lift your arms, chest, and legs off the floor.",
      "Hold the top position briefly, squeezing the lower back and glutes.",
      "Lower back down under control."
    ],
    "bodyPosition": "Neck neutral, looking at the floor, avoid overextending the neck upward.",
    "rangeOfMotion": "Arms, chest and legs lift a few inches off the floor and return under control.",
    "breathing": {
      "inhale": "Inhale before lifting.",
      "exhale": "Exhale as you raise up."
    },
    "mistakes": [
      "Craning the neck upward",
      "Using a jerky, bouncing motion"
    ],
    "safetyNotes": "This is a light activation exercise, not a loaded one — avoid jerking into hyperextension.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 45,
    "alternative": "deadlift"
  },
  {
    "id": "overhead-press",
    "nameEn": "Overhead Barbell Press",
    "nameRu": "Жим штанги стоя",
    "category": "Shoulders",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "verticalPush",
    "targetMuscles": [
      "Shoulders",
      "Triceps",
      "Core"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Core",
      "Traps"
    ],
    "purpose": "Builds raw shoulder and core strength by pressing weight overhead from a standing position — this full-body strength carries over directly to grappling, striking power, and an athletic, broad-shouldered look.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/overhead-press.gif",
    "startingPosition": "Standing, bar racked at the front of the shoulders, grip just outside shoulder width, feet hip-width apart.",
    "steps": [
      "Brace your core and press the bar straight overhead.",
      "Tuck the head slightly back so the bar can travel in a straight line.",
      "Lock out fully overhead, then lower back to the shoulders under control."
    ],
    "bodyPosition": "Ribcage down, glutes squeezed to avoid lower back arching excessively.",
    "rangeOfMotion": "Bar travels from the front of the shoulders to full lockout overhead.",
    "breathing": {
      "inhale": "Inhale and brace before pressing.",
      "exhale": "Exhale as the bar passes the head."
    },
    "mistakes": [
      "Excessive lower back arch",
      "Pressing the bar forward instead of straight up",
      "Not fully locking out overhead"
    ],
    "safetyNotes": "Brace the core and squeeze the glutes to avoid over-arching the lower back as the bar passes the head.",
    "sets": 4,
    "reps": "6-8",
    "restSec": 120,
    "alternative": "arnold-press"
  },
  {
    "id": "lateral-raise",
    "nameEn": "Dumbbell Lateral Raise",
    "nameRu": "Разведение гантелей в стороны",
    "category": "Shoulders",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "verticalPush",
    "targetMuscles": [
      "Side Delts"
    ],
    "secondaryMuscles": [
      "Traps"
    ],
    "purpose": "Builds the side delts that create width across the shoulders, giving the upper body a broader, more athletic V-shape without adding bulk elsewhere.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/lateral-raise.gif",
    "startingPosition": "Standing tall, a light dumbbell in each hand at the sides, slight bend in the elbows.",
    "steps": [
      "Raise both arms out to the sides until roughly shoulder height.",
      "Lead with the elbows, not the hands.",
      "Lower back down under control."
    ],
    "bodyPosition": "Slight forward lean avoided, torso stays upright and still.",
    "rangeOfMotion": "Arms travel from the sides up to roughly shoulder height — no higher.",
    "breathing": {
      "inhale": "Inhale lowering the weights.",
      "exhale": "Exhale raising them."
    },
    "mistakes": [
      "Using momentum/swinging the weights up",
      "Raising above shoulder height and shrugging",
      "Using too heavy a weight"
    ],
    "safetyNotes": "Use a lighter weight than you think you need; swinging heavier dumbbells up with momentum is a common shoulder-impingement risk.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "upright-row"
  },
  {
    "id": "arnold-press",
    "nameEn": "Arnold Press",
    "nameRu": "Жим Арнольда",
    "category": "Shoulders",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "verticalPush",
    "targetMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "secondaryMuscles": [
      "Triceps",
      "Traps"
    ],
    "purpose": "A rotating overhead press that works the shoulders through a fuller range of motion, building both size and the shoulder mobility useful for striking and overhead movements.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/arnold-press.gif",
    "startingPosition": "Seated, dumbbells held in front of the shoulders with palms facing you.",
    "steps": [
      "Press the dumbbells up while rotating the palms to face forward.",
      "Finish with arms extended overhead, palms forward.",
      "Reverse the rotation as you lower back to the start."
    ],
    "bodyPosition": "Back supported, core braced, controlled rotation throughout.",
    "rangeOfMotion": "Dumbbells travel from in front of the shoulders, rotating to full overhead extension.",
    "breathing": {
      "inhale": "Inhale lowering the weights.",
      "exhale": "Exhale pressing up."
    },
    "mistakes": [
      "Rushing the rotation",
      "Excessive back arch while pressing"
    ],
    "safetyNotes": "Keep the rotation smooth and controlled — jerking the rotation under heavy load can irritate the rotator cuff.",
    "sets": 3,
    "reps": "8-10",
    "restSec": 90,
    "alternative": "overhead-press"
  },
  {
    "id": "front-raise",
    "nameEn": "Dumbbell Front Raise",
    "nameRu": "Подъём гантелей перед собой",
    "category": "Shoulders",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "verticalPush",
    "targetMuscles": [
      "Front Delts"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Isolates the front shoulders to round out shoulder development and support pressing strength without overloading the joints.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/front-raise.gif",
    "startingPosition": "Standing, dumbbells in front of the thighs, palms facing the body.",
    "steps": [
      "Raise one or both dumbbells straight out in front to shoulder height.",
      "Pause briefly at the top.",
      "Lower under control back to the thighs."
    ],
    "bodyPosition": "Torso stays still, avoid leaning back to swing the weight up.",
    "rangeOfMotion": "Arms travel from the thighs up to roughly shoulder height.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale raising."
    },
    "mistakes": [
      "Swinging the weight using momentum",
      "Raising above shoulder height"
    ],
    "safetyNotes": "Avoid raising above shoulder height — it unnecessarily stresses the front of the shoulder joint.",
    "sets": 3,
    "reps": "12",
    "restSec": 60,
    "alternative": "lateral-raise"
  },
  {
    "id": "rear-delt-fly",
    "nameEn": "Rear Delt Fly",
    "nameRu": "Разведение гантелей в наклоне",
    "category": "Shoulders",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "horizontalPull",
    "targetMuscles": [
      "Rear Delts",
      "Upper Back"
    ],
    "secondaryMuscles": [
      "Traps"
    ],
    "purpose": "Strengthens the often-neglected rear shoulders and upper back, which improves posture and shoulder health — important for staying injury-free through heavy pressing and striking training.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/rear-delt-fly.gif",
    "startingPosition": "Hinged forward at the hips with a flat back, dumbbells hanging below the chest.",
    "steps": [
      "Raise both arms out to the sides, squeezing the shoulder blades together.",
      "Keep a slight bend in the elbows throughout.",
      "Lower back down under control."
    ],
    "bodyPosition": "Flat back maintained, head in line with the spine.",
    "rangeOfMotion": "Arms travel from in front of the body out to the sides, roughly level with the shoulders.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale raising."
    },
    "mistakes": [
      "Rounding the back",
      "Turning it into a row by bending the elbows too much"
    ],
    "safetyNotes": "Keep a soft bend in the elbows throughout to keep tension on the rear delts rather than the elbow joint.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "lateral-raise"
  },
  {
    "id": "upright-row",
    "nameEn": "Upright Row",
    "nameRu": "Тяга штанги к подбородку",
    "category": "Shoulders",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "verticalPush",
    "targetMuscles": [
      "Side Delts",
      "Traps"
    ],
    "secondaryMuscles": [
      "Biceps"
    ],
    "purpose": "Builds the traps and side shoulders, adding upper-body mass and the shoulder strength needed for clinch control and overhead work.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/upright-row.gif",
    "startingPosition": "Standing, bar held with an overhand grip just inside shoulder width, resting on the thighs.",
    "steps": [
      "Pull the bar straight up along the body toward chin height, elbows leading and flaring out.",
      "Pause briefly at the top.",
      "Lower back down under control."
    ],
    "bodyPosition": "Core braced, torso upright, avoid swinging the hips to assist the pull.",
    "rangeOfMotion": "Bar travels from the thighs up to roughly chest height, elbows leading.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale pulling up."
    },
    "mistakes": [
      "Pulling too high and stressing the shoulder",
      "Using momentum from the hips"
    ],
    "safetyNotes": "Stop pulling once the elbows reach shoulder height — pulling higher is a well-known cause of shoulder impingement.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "lateral-raise"
  },
  {
    "id": "barbell-curl",
    "nameEn": "Barbell Curl",
    "nameRu": "Подъём штанги на бицепс",
    "category": "Biceps",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Beginner",
    "pattern": "bicepCurl",
    "targetMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "purpose": "Builds biceps size and strength, supporting every pulling movement — from rows to grappling grips — while adding visible upper-arm mass.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/barbell-curl.gif",
    "startingPosition": "Standing tall, bar held with an underhand grip shoulder-width apart, arms fully extended.",
    "steps": [
      "Curl the bar up toward the shoulders, keeping the elbows pinned to the sides.",
      "Squeeze the biceps at the top.",
      "Lower the bar back down under control to full extension."
    ],
    "bodyPosition": "Torso stays upright and still, no leaning back to assist the lift.",
    "rangeOfMotion": "Bar travels from arms fully extended to full elbow flexion near the shoulders.",
    "breathing": {
      "inhale": "Inhale lowering the bar.",
      "exhale": "Exhale curling up."
    },
    "mistakes": [
      "Swinging the hips/torso for momentum",
      "Letting the elbows drift forward",
      "Only using half the range of motion"
    ],
    "safetyNotes": "Keep the elbows pinned at the sides; swinging the torso to heave the weight shifts strain onto the lower back.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 60,
    "alternative": "dumbbell-curl"
  },
  {
    "id": "dumbbell-curl",
    "nameEn": "Dumbbell Curl",
    "nameRu": "Подъём гантелей на бицепс",
    "category": "Biceps",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "bicepCurl",
    "targetMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "purpose": "A simple, effective way to build biceps mass and arm strength, and lets each arm work independently to fix any strength imbalance.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/dumbbell-curl.gif",
    "startingPosition": "Standing, a dumbbell in each hand at the sides, palms facing forward.",
    "steps": [
      "Curl one or both dumbbells up toward the shoulders.",
      "Rotate the wrist slightly so the pinky leads if alternating.",
      "Lower back down under control."
    ],
    "bodyPosition": "Elbows stay close to the torso throughout the movement.",
    "rangeOfMotion": "Dumbbells travel from arms extended to full elbow flexion.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale curling up."
    },
    "mistakes": [
      "Swinging the weight up",
      "Letting the elbow travel forward and up"
    ],
    "safetyNotes": "Control the lowering phase — dropping the weight quickly loads the biceps tendon at its most vulnerable point.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 60,
    "alternative": "hammer-curl"
  },
  {
    "id": "hammer-curl",
    "nameEn": "Hammer Curl",
    "nameRu": "Молотковый подъём гантелей",
    "category": "Biceps",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "bicepCurl",
    "targetMuscles": [
      "Biceps",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "purpose": "Builds the biceps and forearms together, which directly improves grip strength — valuable for grappling, clinch control, and carrying heavy loads.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/hammer-curl.gif",
    "startingPosition": "Standing, dumbbells held with a neutral (palms-in) grip at the sides.",
    "steps": [
      "Curl the dumbbells up while keeping the neutral grip throughout.",
      "Squeeze at the top.",
      "Lower under control back to the start."
    ],
    "bodyPosition": "Elbows pinned to the sides, torso still.",
    "rangeOfMotion": "Dumbbells travel from arms extended to full elbow flexion with a neutral grip.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale curling up."
    },
    "mistakes": [
      "Using momentum from the shoulders",
      "Letting the elbows flare outward"
    ],
    "safetyNotes": "Keep the wrist neutral throughout — twisting mid-rep can aggravate the wrist.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 60,
    "alternative": "dumbbell-curl"
  },
  {
    "id": "concentration-curl",
    "nameEn": "Concentration Curl",
    "nameRu": "Концентрированный подъём на бицепс",
    "category": "Biceps",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "bicepCurl",
    "targetMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "purpose": "Isolates the biceps with strict form, maximizing muscle growth in the arm once the bigger compound lifts are done.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/concentration-curl.gif",
    "startingPosition": "Seated, elbow braced against the inner thigh, dumbbell held with arm extended toward the floor.",
    "steps": [
      "Curl the dumbbell up toward the shoulder, keeping the elbow fixed against the thigh.",
      "Squeeze hard at the top.",
      "Lower slowly back to full extension."
    ],
    "bodyPosition": "Torso leans slightly forward, elbow stays anchored the entire set.",
    "rangeOfMotion": "Dumbbell travels from a straight arm to full elbow flexion, elbow anchored on the thigh.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale curling up."
    },
    "mistakes": [
      "Letting the elbow drift off the thigh",
      "Rushing the eccentric (lowering) portion"
    ],
    "safetyNotes": "Keep the elbow fixed against the thigh for the whole set to avoid turning it into a swinging movement.",
    "sets": 3,
    "reps": "10 per side",
    "restSec": 60,
    "alternative": "dumbbell-curl"
  },
  {
    "id": "cable-curl",
    "nameEn": "Cable Curl",
    "nameRu": "Подъём на бицепс на блоке",
    "category": "Biceps",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "bicepCurl",
    "targetMuscles": [
      "Biceps"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "purpose": "Keeps constant tension on the biceps for efficient muscle growth with less strain on the elbows than free weights.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/cable-curl.gif",
    "startingPosition": "Standing in front of the low pulley, straight bar attachment held with an underhand grip, arms extended.",
    "steps": [
      "Curl the bar up toward the chest, keeping elbows fixed at the sides.",
      "Squeeze at the top.",
      "Control the stretch back down against the cable tension."
    ],
    "bodyPosition": "Upright torso, core braced, no leaning back.",
    "rangeOfMotion": "Bar travels from arms extended to full elbow flexion against cable tension.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale curling up."
    },
    "mistakes": [
      "Leaning back to cheat the weight up",
      "Letting elbows travel forward"
    ],
    "safetyNotes": "Keep the torso upright; leaning back to help the bar up removes tension from the biceps and loads the spine instead.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "barbell-curl"
  },
  {
    "id": "triceps-pushdown",
    "nameEn": "Triceps Pushdown",
    "nameRu": "Разгибание рук на блоке",
    "category": "Triceps",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "tricepsExtension",
    "targetMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "purpose": "Isolates the triceps, the muscle that finishes every pressing movement — bigger, stronger triceps mean a bigger bench press and more powerful punches.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/triceps-pushdown.gif",
    "startingPosition": "Standing in front of a high pulley, bar or rope attachment gripped with elbows bent at the sides.",
    "steps": [
      "Push the attachment down until arms are fully extended.",
      "Keep elbows pinned to the sides throughout.",
      "Let the weight rise back under control to the starting bend."
    ],
    "bodyPosition": "Slight forward lean, core braced, elbows stay stationary.",
    "rangeOfMotion": "Forearms travel from roughly 90° of elbow flexion to full extension.",
    "breathing": {
      "inhale": "Inhale as the weight rises.",
      "exhale": "Exhale pushing down."
    },
    "mistakes": [
      "Letting the elbows drift forward away from the body",
      "Using the shoulders to help push down"
    ],
    "safetyNotes": "Keep the elbows pinned at the sides — letting them drift forward turns the movement into a chest press and reduces triceps loading.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "overhead-triceps-extension"
  },
  {
    "id": "overhead-triceps-extension",
    "nameEn": "Overhead Triceps Extension",
    "nameRu": "Французский жим стоя",
    "category": "Triceps",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "tricepsExtension",
    "targetMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Stretches and strengthens the triceps through a long range of motion, building arm size and the lockout strength needed in pressing and striking.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/overhead-triceps-extension.gif",
    "startingPosition": "Standing or seated, a single dumbbell held overhead with both hands, elbows pointing forward.",
    "steps": [
      "Lower the dumbbell behind the head by bending the elbows.",
      "Stop once the forearms are roughly parallel to the floor.",
      "Extend the arms back up to full lockout overhead."
    ],
    "bodyPosition": "Core braced to avoid excessive back arch, elbows stay close to the head.",
    "rangeOfMotion": "Forearms travel from full elbow flexion behind the head to full overhead extension.",
    "breathing": {
      "inhale": "Inhale lowering the weight.",
      "exhale": "Exhale extending up."
    },
    "mistakes": [
      "Letting the elbows flare out wide",
      "Arching the back to compensate"
    ],
    "safetyNotes": "Use a lighter weight than for pressing movements — the lengthened overhead position stresses the elbow tendon more than other triceps work.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "triceps-pushdown"
  },
  {
    "id": "skull-crusher",
    "nameEn": "Skull Crusher",
    "nameRu": "Французский жим лёжа",
    "category": "Triceps",
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "tricepsExtension",
    "targetMuscles": [
      "Triceps"
    ],
    "secondaryMuscles": [],
    "purpose": "A heavier triceps builder that adds real pressing strength and arm mass, directly boosting your bench press and overhead press numbers.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/skull-crusher.gif",
    "startingPosition": "Lying on a bench, bar held above the forehead with arms extended, elbows pointing at the ceiling.",
    "steps": [
      "Lower the bar toward the forehead by bending only the elbows.",
      "Stop just above the forehead.",
      "Extend the arms back to the starting position."
    ],
    "bodyPosition": "Upper arms stay vertical and still throughout, only the forearms move.",
    "rangeOfMotion": "Forearms travel from full extension down to the forehead, elbows staying fixed.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale extending."
    },
    "mistakes": [
      "Letting the elbows drift backward or forward",
      "Using too much weight and losing control near the head"
    ],
    "safetyNotes": "Keep the upper arms vertical and stationary; letting the elbows drift back toward the face risks dropping the weight on the head.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "overhead-triceps-extension"
  },
  {
    "id": "close-grip-bench-press",
    "nameEn": "Close-Grip Bench Press",
    "nameRu": "Жим штанги узким хватом",
    "category": "Triceps",
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Triceps",
      "Chest"
    ],
    "secondaryMuscles": [
      "Chest",
      "Front Delts"
    ],
    "purpose": "Shifts bench pressing emphasis onto the triceps, building both pressing strength and arm size in one compound movement.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/close-grip-bench-press.gif",
    "startingPosition": "Lying on a flat bench, hands gripping the bar just inside shoulder width.",
    "steps": [
      "Lower the bar to the lower chest, keeping elbows tucked close to the body.",
      "Press back up to full lockout, focusing on triceps drive."
    ],
    "bodyPosition": "Shoulder blades retracted, elbows tracking close to the torso, not flared.",
    "rangeOfMotion": "Bar travels from full extension down to the lower chest with the elbows tracking close to the torso.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale pressing up."
    },
    "mistakes": [
      "Gripping too narrow and straining the wrists",
      "Flaring the elbows out wide"
    ],
    "safetyNotes": "Do not grip narrower than shoulder width — an overly narrow grip stresses the wrists and elbows.",
    "sets": 3,
    "reps": "8-10",
    "restSec": 100,
    "alternative": "triceps-pushdown"
  },
  {
    "id": "triceps-dip",
    "nameEn": "Triceps Dip (Bench)",
    "nameRu": "Отжимания от скамьи на трицепс",
    "category": "Triceps",
    "equipment": [
      "Bodyweight",
      "Bench"
    ],
    "difficulty": "Beginner",
    "pattern": "horizontalPush",
    "targetMuscles": [
      "Triceps",
      "Chest"
    ],
    "secondaryMuscles": [
      "Front Delts"
    ],
    "purpose": "A bodyweight triceps and chest builder that is easy to progress and great for building functional pressing strength anywhere.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/triceps-dip.gif",
    "startingPosition": "Hands on the edge of a bench behind you, legs extended, hips just in front of the bench.",
    "steps": [
      "Lower your hips toward the floor by bending the elbows.",
      "Descend until elbows reach roughly 90 degrees.",
      "Press back up to full arm extension."
    ],
    "bodyPosition": "Torso stays upright and close to the bench, shoulders down away from the ears.",
    "rangeOfMotion": "Hips lower until the elbows reach roughly 90°, then press back to full extension.",
    "breathing": {
      "inhale": "Inhale on the way down.",
      "exhale": "Exhale pressing up."
    },
    "mistakes": [
      "Shoulders creeping up toward the ears",
      "Going too deep and straining the shoulder joint"
    ],
    "safetyNotes": "Keep the torso upright and close to the bench — leaning far forward shifts load toward the shoulder instead of the triceps.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "triceps-pushdown"
  },
  {
    "id": "barbell-squat",
    "nameEn": "Barbell Back Squat",
    "nameRu": "Приседания со штангой",
    "category": "Legs",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "squat",
    "targetMuscles": [
      "Quadriceps",
      "Glutes",
      "Core"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Lower Back",
      "Calves"
    ],
    "purpose": "The foundation of lower-body strength — squatting builds the legs, glutes, and core strength that drive sprinting, jumping, kicking, and takedown power.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/barbell-squat.gif",
    "startingPosition": "Stand with feet approximately shoulder-width apart and the bar positioned securely across the upper back.",
    "steps": [
      "Keep your chest stable.",
      "Brace your core.",
      "Push your hips back and bend your knees.",
      "Lower under control until the hips are at or below knee level.",
      "Push through your feet to return to standing."
    ],
    "bodyPosition": "Knees track in line with the toes, chest stays up, weight stays mid-foot.",
    "rangeOfMotion": "Hips travel from standing down to at least the point where the thighs are parallel to the floor, then back to standing.",
    "breathing": {
      "inhale": "Inhale and brace before descending.",
      "exhale": "Exhale while returning upward."
    },
    "mistakes": [
      "Knees collapsing inward",
      "Losing a neutral spine",
      "Heels lifting from the floor",
      "Using excessive weight"
    ],
    "safetyNotes": "Use a squat rack with safety pins set just below your lowest depth; never attempt a near-maximal squat without spotter arms or a rack.",
    "sets": 4,
    "reps": "8",
    "restSec": 120,
    "alternative": "goblet-squat"
  },
  {
    "id": "front-squat",
    "nameEn": "Front Squat",
    "nameRu": "Фронтальные приседания",
    "category": "Legs",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Advanced",
    "pattern": "squat",
    "targetMuscles": [
      "Quadriceps",
      "Core",
      "Upper Back"
    ],
    "secondaryMuscles": [
      "Core",
      "Upper Back"
    ],
    "purpose": "Builds quad strength and core bracing with less lower-back stress than back squats, improving the upright strength needed for Olympic-style lifts and athletic movement.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/front-squat.gif",
    "startingPosition": "Bar rests across the front of the shoulders, elbows held high, feet shoulder-width apart.",
    "steps": [
      "Brace the core and keep the elbows up.",
      "Sit down between the hips, keeping the torso upright.",
      "Descend until the hips are at or below knee level.",
      "Drive back up, keeping elbows lifted the whole rep."
    ],
    "bodyPosition": "Torso stays more upright than a back squat, elbows high to keep the bar racked.",
    "rangeOfMotion": "Hips travel from standing down to at or below parallel, torso staying more upright than a back squat.",
    "breathing": {
      "inhale": "Inhale and brace before descending.",
      "exhale": "Exhale returning up."
    },
    "mistakes": [
      "Elbows dropping, causing the bar to roll forward",
      "Excessive forward lean",
      "Heels rising off the floor"
    ],
    "safetyNotes": "If your wrists or shoulders can't tolerate the front rack grip, use crossed arms instead of forcing the standard grip.",
    "sets": 4,
    "reps": "6-8",
    "restSec": 120,
    "alternative": "barbell-squat"
  },
  {
    "id": "leg-press",
    "nameEn": "Leg Press",
    "nameRu": "Жим ногами в тренажёре",
    "category": "Legs",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "squat",
    "targetMuscles": [
      "Quadriceps",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "purpose": "Lets you safely push the legs with heavy loads to build size and strength without the balance demands of a free-standing squat — great for adding leg volume without extra fatigue.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/leg-press.gif",
    "startingPosition": "Seated in the machine, feet shoulder-width on the platform, back flat against the pad.",
    "steps": [
      "Release the safety and lower the platform by bending the knees.",
      "Descend until knees reach roughly 90 degrees.",
      "Press back up through the heels without locking the knees out hard."
    ],
    "bodyPosition": "Lower back stays flush against the pad, knees track with the toes.",
    "rangeOfMotion": "Platform travels from knees at roughly 90° to near-full leg extension, without locking the knees out hard.",
    "breathing": {
      "inhale": "Inhale lowering the platform.",
      "exhale": "Exhale pressing it away."
    },
    "mistakes": [
      "Lower back rounding off the pad",
      "Locking the knees out violently at the top",
      "Letting the knees cave inward"
    ],
    "safetyNotes": "Never fully lock and bounce the knees at the top — keep a slight bend to protect the joint.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 90,
    "alternative": "barbell-squat"
  },
  {
    "id": "walking-lunge",
    "nameEn": "Walking Lunge",
    "nameRu": "Выпады в движении",
    "category": "Legs",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "lunge",
    "targetMuscles": [
      "Quadriceps",
      "Glutes",
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Calves",
      "Core"
    ],
    "purpose": "Builds single-leg strength and balance, directly improving stability for kicks, sprints, and changing direction quickly in MMA.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/walking-lunge.gif",
    "startingPosition": "Standing tall, a dumbbell in each hand at the sides.",
    "steps": [
      "Step forward into a long stride and lower the back knee toward the floor.",
      "Keep the front shin close to vertical.",
      "Drive through the front foot to step into the next lunge."
    ],
    "bodyPosition": "Torso stays upright, core braced to prevent excessive leaning.",
    "rangeOfMotion": "Hips lower until the back knee is close to the floor, front shin near vertical.",
    "breathing": {
      "inhale": "Inhale on the descent.",
      "exhale": "Exhale driving up into the next step."
    },
    "mistakes": [
      "Front knee traveling far past the toes",
      "Short, choppy steps reducing range of motion",
      "Leaning the torso forward excessively"
    ],
    "safetyNotes": "Take a long enough stride that the front knee doesn't travel far past the toes on the descent.",
    "sets": 3,
    "reps": "12 per leg",
    "restSec": 90,
    "alternative": "bulgarian-split-squat"
  },
  {
    "id": "bulgarian-split-squat",
    "nameEn": "Bulgarian Split Squat",
    "nameRu": "Болгарские выпады",
    "category": "Legs",
    "equipment": [
      "Dumbbell",
      "Bench"
    ],
    "difficulty": "Advanced",
    "pattern": "lunge",
    "targetMuscles": [
      "Quadriceps",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "purpose": "An advanced single-leg strength builder that exposes and fixes left/right imbalances while building serious quad and glute strength.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/bulgarian-split-squat.gif",
    "startingPosition": "Rear foot elevated on a bench behind you, front foot planted a comfortable stride ahead, dumbbells at the sides.",
    "steps": [
      "Lower straight down by bending the front knee.",
      "Descend until the back knee nearly touches the floor.",
      "Drive through the front heel to stand back up."
    ],
    "bodyPosition": "Torso stays mostly upright, front knee tracks over the foot.",
    "rangeOfMotion": "Front knee bends until the back knee nearly touches the floor, then drives back to standing.",
    "breathing": {
      "inhale": "Inhale descending.",
      "exhale": "Exhale driving up."
    },
    "mistakes": [
      "Front foot placed too close, limiting depth",
      "Pushing off the back foot instead of the front"
    ],
    "safetyNotes": "Start with bodyweight or light dumbbells until balance is reliable — this is a demanding single-leg position to lose control in.",
    "sets": 3,
    "reps": "10 per leg",
    "restSec": 90,
    "alternative": "walking-lunge"
  },
  {
    "id": "leg-extension",
    "nameEn": "Leg Extension",
    "nameRu": "Разгибание ног в тренажёре",
    "category": "Legs",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "squat",
    "targetMuscles": [
      "Quadriceps"
    ],
    "secondaryMuscles": [],
    "purpose": "Isolates the quads to add targeted leg size and strength once the bigger compound lifts like squats are done.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/leg-extension.gif",
    "startingPosition": "Seated in the machine, pad resting against the lower shins, knees bent at 90 degrees.",
    "steps": [
      "Extend the knees to lift the pad until the legs are straight.",
      "Pause briefly, squeezing the quads.",
      "Lower back down under control."
    ],
    "bodyPosition": "Back flush against the pad, hips stay seated throughout.",
    "rangeOfMotion": "Legs travel from roughly 90° of knee flexion to full extension.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale extending."
    },
    "mistakes": [
      "Using momentum to kick the weight up",
      "Locking the knees out violently"
    ],
    "safetyNotes": "Avoid slamming the weight stack at full extension — control the top of the rep to protect the knee joint.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "leg-press"
  },
  {
    "id": "leg-curl",
    "nameEn": "Lying Leg Curl",
    "nameRu": "Сгибание ног в тренажёре лёжа",
    "category": "Legs",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "squat",
    "targetMuscles": [
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "purpose": "Builds hamstring strength, which balances out quad-dominant lifts and protects the knees — important for sprinting speed and injury prevention.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/leg-curl.gif",
    "startingPosition": "Lying face down on the machine, pad resting against the back of the ankles, legs extended.",
    "steps": [
      "Curl the heels toward the glutes by bending the knees.",
      "Squeeze the hamstrings at the top.",
      "Lower back down under control."
    ],
    "bodyPosition": "Hips stay pressed into the pad, avoid lifting them to generate momentum.",
    "rangeOfMotion": "Heels travel from legs extended to full knee flexion toward the glutes.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale curling up."
    },
    "mistakes": [
      "Hips lifting off the pad",
      "Using jerky momentum instead of control"
    ],
    "safetyNotes": "Keep the hips pressed into the pad; lifting them to force extra reps shifts stress onto the lower back.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 60,
    "alternative": "romanian-deadlift"
  },
  {
    "id": "romanian-deadlift",
    "nameEn": "Romanian Deadlift",
    "nameRu": "Румынская тяга",
    "category": "Legs",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "hinge",
    "targetMuscles": [
      "Hamstrings",
      "Glutes",
      "Lower Back"
    ],
    "secondaryMuscles": [
      "Lower Back",
      "Forearms"
    ],
    "purpose": "Builds serious hamstring and glute strength, the muscles that drive hip extension — key for sprint speed, jumping, and explosive takedowns.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/romanian-deadlift.gif",
    "startingPosition": "Standing tall holding the bar at hip height, feet hip-width apart.",
    "steps": [
      "Push the hips back while keeping a soft bend in the knees.",
      "Lower the bar along the thighs, keeping a flat back.",
      "Stop once you feel a strong hamstring stretch.",
      "Drive the hips forward to return to standing."
    ],
    "bodyPosition": "Flat back maintained throughout, bar stays close to the legs.",
    "rangeOfMotion": "Bar travels from hip height down the thighs to a strong hamstring stretch just below knee level, then back up.",
    "breathing": {
      "inhale": "Inhale hinging down.",
      "exhale": "Exhale driving the hips forward."
    },
    "mistakes": [
      "Rounding the lower back",
      "Bending the knees too much, turning it into a squat",
      "Bar drifting away from the legs"
    ],
    "safetyNotes": "Stop the descent once your lower back starts to round — that is your current hamstring flexibility limit, not a failure of effort.",
    "sets": 3,
    "reps": "8-10",
    "restSec": 100,
    "alternative": "deadlift"
  },
  {
    "id": "goblet-squat",
    "nameEn": "Goblet Squat",
    "nameRu": "Приседания с гантелью/гирей у груди",
    "category": "Legs",
    "equipment": [
      "Dumbbell",
      "Kettlebell"
    ],
    "difficulty": "Beginner",
    "pattern": "squat",
    "targetMuscles": [
      "Quadriceps",
      "Glutes",
      "Core"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "A beginner-friendly squat variation that teaches proper squat mechanics while still building real leg and core strength.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/goblet-squat.gif",
    "startingPosition": "Standing with feet shoulder-width apart, holding a dumbbell or kettlebell vertically against the chest.",
    "steps": [
      "Brace the core and sit down between the hips.",
      "Descend until the elbows lightly touch the inside of the knees.",
      "Drive back up through the whole foot to standing."
    ],
    "bodyPosition": "Chest stays tall, elbows point down, knees track over the toes.",
    "rangeOfMotion": "Hips travel from standing down until the elbows lightly contact the inside of the knees.",
    "breathing": {
      "inhale": "Inhale descending.",
      "exhale": "Exhale standing up."
    },
    "mistakes": [
      "Rounding the upper back",
      "Knees caving inward",
      "Rising onto the toes"
    ],
    "safetyNotes": "Keep the weight close to the chest throughout — letting it drift forward pulls you onto your toes.",
    "sets": 3,
    "reps": "12-15",
    "restSec": 75,
    "alternative": "barbell-squat"
  },
  {
    "id": "calf-raise",
    "nameEn": "Standing Calf Raise",
    "nameRu": "Подъём на носки стоя",
    "category": "Legs",
    "equipment": [
      "Dumbbell",
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "squat",
    "targetMuscles": [
      "Calves"
    ],
    "secondaryMuscles": [],
    "purpose": "Builds calf strength and size, supporting ankle stability for sprinting, jumping, and quick footwork on the mat or in the ring.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/calf-raise.gif",
    "startingPosition": "Standing on the balls of the feet on a raised edge, holding dumbbells or using a calf machine, heels lower than the toes.",
    "steps": [
      "Rise up as high as possible onto the toes.",
      "Pause and squeeze the calves at the top.",
      "Lower the heels back down below the step for a full stretch."
    ],
    "bodyPosition": "Torso stays upright and still, knees softly extended.",
    "rangeOfMotion": "Heels travel from a full stretch below the step to maximum height on the toes.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale rising up."
    },
    "mistakes": [
      "Bouncing instead of controlling the stretch",
      "Partial range of motion"
    ],
    "safetyNotes": "Control the lowering phase into the stretch rather than dropping into it — the Achilles tendon is vulnerable to a fast, loaded stretch.",
    "sets": 3,
    "reps": "15-20",
    "restSec": 45,
    "alternative": "leg-press"
  },
  {
    "id": "hip-thrust",
    "nameEn": "Barbell Hip Thrust",
    "nameRu": "Ягодичный мост со штангой",
    "category": "Glutes",
    "equipment": [
      "Barbell",
      "Bench"
    ],
    "difficulty": "Intermediate",
    "pattern": "hinge",
    "targetMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Lower Back"
    ],
    "purpose": "The most effective glute-building exercise — strong glutes mean a more powerful hip drive for sprinting, jumping, and takedowns, plus a stronger, more athletic lower body.",
    "recommendedRIR": "1-3 RIR",
    "startingPosition": "Upper back resting against a bench, bar positioned over the hips, knees bent and feet flat on the floor.",
    "steps": [
      "Drive through the heels to extend the hips upward.",
      "Squeeze the glutes hard at the top, forming a straight line from knees to shoulders.",
      "Lower back down under control without resting at the bottom."
    ],
    "bodyPosition": "Chin tucked slightly, ribs down to avoid over-arching the lower back at the top.",
    "rangeOfMotion": "Hips travel from a seated position on the floor up to full extension, forming a straight line from shoulders to knees.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale driving the hips up."
    },
    "mistakes": [
      "Overextending the lower back at the top instead of the hips",
      "Pushing through the toes instead of the heels"
    ],
    "safetyNotes": "Pad the bar well across the hips and keep the chin tucked — over-extending the lower back at the top (rather than the hips) is the main injury risk here.",
    "sets": 4,
    "reps": "10",
    "restSec": 100,
    "alternative": "glute-bridge"
  },
  {
    "id": "glute-bridge",
    "nameEn": "Glute Bridge",
    "nameRu": "Ягодичный мост",
    "category": "Glutes",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "hinge",
    "targetMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Lower Back"
    ],
    "purpose": "A beginner-friendly way to activate and strengthen the glutes, protecting the lower back and building the hip strength behind every explosive movement.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/glute-bridge.gif",
    "startingPosition": "Lying on the back, knees bent, feet flat on the floor hip-width apart.",
    "steps": [
      "Drive through the heels to lift the hips off the floor.",
      "Squeeze the glutes at the top.",
      "Lower back down under control."
    ],
    "bodyPosition": "Ribs stay down, avoid arching the lower back excessively.",
    "rangeOfMotion": "Hips travel from the floor to full extension.",
    "breathing": {
      "inhale": "Inhale lowering.",
      "exhale": "Exhale raising the hips."
    },
    "mistakes": [
      "Pushing through the toes",
      "Overarching the lower back instead of using the glutes"
    ],
    "safetyNotes": "Drive through the heels, not the toes, to keep the load on the glutes and hamstrings rather than the knees.",
    "sets": 3,
    "reps": "15",
    "restSec": 60,
    "alternative": "hip-thrust"
  },
  {
    "id": "cable-kickback",
    "nameEn": "Cable Glute Kickback",
    "nameRu": "Отведение ноги назад на блоке",
    "category": "Glutes",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "hinge",
    "targetMuscles": [
      "Glutes"
    ],
    "secondaryMuscles": [
      "Lower Back"
    ],
    "purpose": "Isolates the glutes to add shape and strength without loading the spine, complementing heavier compound lifts like squats and deadlifts.",
    "recommendedRIR": "0-2 RIR — closer to failure is acceptable since joint stress is low",
    "media": "/images/exercises/cable-kickback.gif",
    "startingPosition": "Facing the cable machine with an ankle cuff attached, holding the frame for balance, slight forward lean.",
    "steps": [
      "Kick the working leg straight back and up, squeezing the glute.",
      "Pause briefly at the top.",
      "Return under control without letting the weight stack touch down hard."
    ],
    "bodyPosition": "Core braced, hips stay square, avoid rotating the torso.",
    "rangeOfMotion": "Leg travels from in line with the torso back and up to a slight hyperextension at the hip.",
    "breathing": {
      "inhale": "Inhale returning.",
      "exhale": "Exhale kicking back."
    },
    "mistakes": [
      "Using the lower back to generate momentum",
      "Letting the hips rotate open"
    ],
    "safetyNotes": "Keep the movement slow and controlled — using momentum to swing the leg reduces glute activation and stresses the lower back.",
    "sets": 3,
    "reps": "12 per side",
    "restSec": 60,
    "alternative": "glute-bridge"
  },
  {
    "id": "sumo-deadlift",
    "nameEn": "Sumo Deadlift",
    "nameRu": "Тяга сумо",
    "category": "Glutes",
    "equipment": [
      "Barbell"
    ],
    "difficulty": "Advanced",
    "pattern": "hinge",
    "targetMuscles": [
      "Glutes",
      "Inner Thighs",
      "Back"
    ],
    "secondaryMuscles": [
      "Quadriceps",
      "Lower Back"
    ],
    "purpose": "Builds glute and inner-thigh strength with a more upright torso, making it a strong option for building pulling strength while sparing the lower back.",
    "recommendedRIR": "1-3 RIR on working sets — leave at least one clean rep in reserve",
    "media": "/images/exercises/sumo-deadlift.gif",
    "startingPosition": "Wide stance with toes turned out, grip inside the knees, hips low and chest up.",
    "steps": [
      "Brace the core and drive the knees outward as you stand up.",
      "Keep the bar close to the body throughout the pull.",
      "Lock out by squeezing the glutes at the top."
    ],
    "bodyPosition": "Chest stays upright, shins nearly vertical throughout the pull.",
    "rangeOfMotion": "Bar travels from the floor to full hip and knee extension with a wide stance.",
    "breathing": {
      "inhale": "Inhale and brace before lifting.",
      "exhale": "Exhale after the lockout."
    },
    "mistakes": [
      "Knees caving inward",
      "Hips rising faster than the chest"
    ],
    "safetyNotes": "Keep the knees tracking in the same direction as the toes throughout the pull to protect the knees and hips.",
    "sets": 3,
    "reps": "5-6",
    "restSec": 150,
    "alternative": "deadlift"
  },
  {
    "id": "step-up",
    "nameEn": "Dumbbell Step-Up",
    "nameRu": "Зашагивания на платформу с гантелями",
    "category": "Glutes",
    "equipment": [
      "Dumbbell"
    ],
    "difficulty": "Intermediate",
    "pattern": "lunge",
    "targetMuscles": [
      "Glutes",
      "Quadriceps"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Core"
    ],
    "purpose": "Builds single-leg glute and quad strength while also training balance and coordination — directly useful for climbing, sprinting, and explosive single-leg power.",
    "recommendedRIR": "1-3 RIR",
    "media": "/images/exercises/step-up.gif",
    "startingPosition": "Standing in front of a sturdy box or bench, a dumbbell in each hand.",
    "steps": [
      "Step one foot fully onto the box.",
      "Drive through that foot to stand up fully on top.",
      "Step back down under control and repeat."
    ],
    "bodyPosition": "Torso stays upright, avoid pushing off the trailing leg.",
    "rangeOfMotion": "Hip and knee of the lead leg travel from a bent position to full extension on top of the box.",
    "breathing": {
      "inhale": "Inhale stepping down.",
      "exhale": "Exhale driving up."
    },
    "mistakes": [
      "Pushing off the bottom leg instead of the top leg",
      "Using a box that is too high and losing form"
    ],
    "safetyNotes": "Choose a box height you can step onto with control — too high a box encourages pushing off the trailing leg, defeating the purpose.",
    "sets": 3,
    "reps": "10 per leg",
    "restSec": 75,
    "alternative": "walking-lunge"
  },
  {
    "id": "plank",
    "nameEn": "Plank",
    "nameRu": "Планка",
    "category": "Core",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "corePlank",
    "targetMuscles": [
      "Core",
      "Shoulders"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "purpose": "Builds the deep core stability that protects your spine under heavy squats and deadlifts, and is the foundation for transferring power between your legs and upper body in strikes.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "media": "/images/exercises/plank.gif",
    "startingPosition": "Forearms on the floor, elbows under the shoulders, body in a straight line from head to heels.",
    "steps": [
      "Brace the core and squeeze the glutes.",
      "Hold the straight-line position for the prescribed time.",
      "Keep breathing steadily throughout the hold."
    ],
    "bodyPosition": "Hips level with shoulders, neither sagging nor piked up.",
    "rangeOfMotion": "Isometric hold — no joint movement, the spine stays in a single neutral line.",
    "breathing": {
      "inhale": "Breathe steadily throughout; avoid holding your breath.",
      "exhale": "Exhale in a controlled rhythm during the hold."
    },
    "mistakes": [
      "Hips sagging toward the floor",
      "Hips piking up too high",
      "Holding the breath"
    ],
    "safetyNotes": "Stop the hold once the hips start to sag or pike — fatigued, poor-form planking does not train the core any better and loads the lower back.",
    "sets": 3,
    "reps": "45-60 sec",
    "restSec": 45,
    "alternative": "side-plank"
  },
  {
    "id": "hanging-leg-raise",
    "nameEn": "Hanging Leg Raise",
    "nameRu": "Подъём ног в висе",
    "category": "Core",
    "equipment": [
      "Pull-up Bar"
    ],
    "difficulty": "Advanced",
    "pattern": "verticalPull",
    "targetMuscles": [
      "Lower Abs",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Forearms"
    ],
    "purpose": "Builds serious lower-ab and hip-flexor strength, which is essential for controlling your legs in grappling and generating power in kicks.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "media": "/images/exercises/hanging-leg-raise.gif",
    "startingPosition": "Hanging from a pull-up bar with arms extended, legs straight down.",
    "steps": [
      "Raise the legs up toward the chest, keeping them as straight as possible.",
      "Pause briefly at the top.",
      "Lower back down under control without swinging."
    ],
    "bodyPosition": "Avoid excessive swinging; engage the lats to stabilize the hang.",
    "rangeOfMotion": "Legs travel from hanging straight down to roughly parallel with the floor or higher.",
    "breathing": {
      "inhale": "Inhale lowering the legs.",
      "exhale": "Exhale raising them."
    },
    "mistakes": [
      "Using momentum/swinging",
      "Bending the knees excessively to cheat the rep"
    ],
    "safetyNotes": "Avoid excessive swinging — uncontrolled momentum transfers load to the shoulders instead of the abs.",
    "sets": 3,
    "reps": "10-12",
    "restSec": 75,
    "alternative": "bicycle-crunch"
  },
  {
    "id": "russian-twist",
    "nameEn": "Russian Twist",
    "nameRu": "Русский твист",
    "category": "Core",
    "equipment": [
      "Bodyweight",
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "coreRotation",
    "targetMuscles": [
      "Obliques",
      "Core"
    ],
    "secondaryMuscles": [
      "Hip Flexors"
    ],
    "purpose": "Builds rotational core strength — the same muscles that generate power behind a cross or hook punch and help you resist being turned or taken down.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "media": "/images/exercises/russian-twist.gif",
    "startingPosition": "Seated with knees bent, torso leaned back slightly, heels lightly touching or lifted off the floor.",
    "steps": [
      "Rotate the torso to touch the floor (or weight) beside one hip.",
      "Rotate through the core to the opposite side.",
      "Keep the movement controlled, not jerky."
    ],
    "bodyPosition": "Spine stays long, rotation comes from the torso, not just the arms.",
    "rangeOfMotion": "Torso rotates from one side to the other, hips staying still.",
    "breathing": {
      "inhale": "Inhale at the center.",
      "exhale": "Exhale with each rotation."
    },
    "mistakes": [
      "Rounding the lower back excessively",
      "Moving only the arms instead of rotating the torso"
    ],
    "safetyNotes": "Keep the lower back long rather than rounded — rounding while rotating under load is a common source of lower-back irritation.",
    "sets": 3,
    "reps": "16 (8 per side)",
    "restSec": 45,
    "alternative": "cable-woodchop"
  },
  {
    "id": "cable-woodchop",
    "nameEn": "Cable Woodchop",
    "nameRu": "Дровосек на блоке",
    "category": "Core",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Intermediate",
    "pattern": "coreRotation",
    "targetMuscles": [
      "Obliques",
      "Core"
    ],
    "secondaryMuscles": [
      "Shoulders"
    ],
    "purpose": "Trains the core to produce rotational power under load, directly building the twisting strength behind strikes and throws.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "startingPosition": "Standing side-on to a high pulley, handle gripped with both hands near one shoulder.",
    "steps": [
      "Rotate the torso and pull the handle diagonally down across the body.",
      "Finish with the handle near the opposite hip.",
      "Return under control against the cable tension."
    ],
    "bodyPosition": "Rotation driven by the hips and torso together, feet can pivot slightly.",
    "rangeOfMotion": "Handle travels diagonally from high on one side to low on the opposite hip.",
    "breathing": {
      "inhale": "Inhale returning.",
      "exhale": "Exhale on the chop."
    },
    "mistakes": [
      "Using only the arms instead of rotating the torso",
      "Rounding the back during the pull"
    ],
    "safetyNotes": "Let the rotation come from the hips and torso together, not just the arms, to keep the load off the lower back.",
    "sets": 3,
    "reps": "12 per side",
    "restSec": 60,
    "alternative": "russian-twist"
  },
  {
    "id": "ab-wheel-rollout",
    "nameEn": "Ab Wheel Rollout",
    "nameRu": "Ролик для пресса",
    "category": "Core",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "corePlank",
    "targetMuscles": [
      "Core",
      "Shoulders"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Lower Back"
    ],
    "purpose": "An advanced core exercise that builds exceptional midsection strength and stability, protecting the spine during heavy lifts and explosive movements.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "media": "/images/exercises/ab-wheel-rollout.gif",
    "startingPosition": "Kneeling on the floor, hands gripping the ab wheel directly below the shoulders.",
    "steps": [
      "Brace the core and slowly roll the wheel forward, extending the body.",
      "Go as far as control allows while keeping the back flat.",
      "Pull back to the starting kneeling position using the core."
    ],
    "bodyPosition": "Avoid letting the lower back sag as you extend further out.",
    "rangeOfMotion": "Body extends from a kneeling position out to as far as control allows, then returns.",
    "breathing": {
      "inhale": "Inhale rolling out.",
      "exhale": "Exhale pulling back in."
    },
    "mistakes": [
      "Letting the hips sag toward the floor",
      "Rolling out too far before building core strength"
    ],
    "safetyNotes": "Only roll out as far as you can without the lower back sagging — build range gradually over weeks.",
    "sets": 3,
    "reps": "8-10",
    "restSec": 75,
    "alternative": "plank"
  },
  {
    "id": "bicycle-crunch",
    "nameEn": "Bicycle Crunch",
    "nameRu": "Велосипед (скручивания)",
    "category": "Core",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "coreRotation",
    "targetMuscles": [
      "Abs",
      "Obliques"
    ],
    "secondaryMuscles": [
      "Hip Flexors"
    ],
    "purpose": "A simple, effective way to build visible ab strength and endurance while also hitting the obliques used in rotational movements.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "media": "/images/exercises/bicycle-crunch.gif",
    "startingPosition": "Lying on the back, hands lightly behind the head, knees bent at 90 degrees.",
    "steps": [
      "Bring one elbow toward the opposite knee while extending the other leg.",
      "Alternate sides in a smooth, controlled pedaling motion.",
      "Keep the lower back pressed into the floor."
    ],
    "bodyPosition": "Avoid pulling on the neck with the hands; the core should drive the motion.",
    "rangeOfMotion": "Alternating knee-to-elbow range with the opposite leg extending.",
    "breathing": {
      "inhale": "Inhale between reps.",
      "exhale": "Exhale with each twist."
    },
    "mistakes": [
      "Yanking the head with the hands",
      "Moving too fast with poor control"
    ],
    "safetyNotes": "Keep the lower back flat on the floor throughout; if it arches, reduce the range of the extended leg.",
    "sets": 3,
    "reps": "20 (10 per side)",
    "restSec": 45,
    "alternative": "russian-twist"
  },
  {
    "id": "side-plank",
    "nameEn": "Side Plank",
    "nameRu": "Боковая планка",
    "category": "Core",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "corePlank",
    "targetMuscles": [
      "Obliques",
      "Core"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "purpose": "Builds oblique and lateral core strength that protects the spine from side-to-side forces — important for takedown defense and grappling scrambles.",
    "recommendedRIR": "0-1 RIR — these carry lower systemic fatigue than heavy compounds",
    "media": "/images/exercises/side-plank.gif",
    "startingPosition": "Lying on one side, forearm on the floor under the shoulder, legs stacked and extended.",
    "steps": [
      "Lift the hips off the floor until the body forms a straight line.",
      "Hold the position, keeping the hips square.",
      "Lower back down under control."
    ],
    "bodyPosition": "Hips stay stacked and lifted, avoid rotating forward or backward.",
    "rangeOfMotion": "Isometric hold with the body in a straight line supported on one forearm.",
    "breathing": {
      "inhale": "Breathe steadily through the hold.",
      "exhale": "Exhale in a controlled rhythm."
    },
    "mistakes": [
      "Hips sagging toward the floor",
      "Rotating the torso forward"
    ],
    "safetyNotes": "Stack the hips and shoulders directly — rotating forward or back reduces the oblique challenge and adds shoulder strain.",
    "sets": 3,
    "reps": "30-45 sec per side",
    "restSec": 45,
    "alternative": "plank"
  },
  {
    "id": "mountain-climbers",
    "nameEn": "Mountain Climbers",
    "nameRu": "Скалолаз",
    "category": "Core",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "corePlank",
    "targetMuscles": [
      "Core",
      "Hip Flexors",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Shoulders"
    ],
    "purpose": "Combines core strength with a cardio challenge, building the conditioning and midsection endurance needed for longer rounds of sparring or grappling.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/mountain-climbers.gif",
    "startingPosition": "High plank position, hands under the shoulders, body in a straight line.",
    "steps": [
      "Drive one knee toward the chest.",
      "Quickly switch legs in a running-like motion.",
      "Keep the hips low and stable throughout."
    ],
    "bodyPosition": "Hips stay level, avoid bouncing them up and down.",
    "rangeOfMotion": "Knees drive alternately from extended toward the chest in a running-like motion.",
    "breathing": {
      "inhale": "Breathe rhythmically with the pace.",
      "exhale": "Exhale on each knee drive."
    },
    "mistakes": [
      "Hips rising too high, reducing the core challenge",
      "Losing a flat back under fatigue"
    ],
    "safetyNotes": "Keep the hips low and level — letting them rise turns this into a hip-flexor exercise and reduces core demand.",
    "sets": 3,
    "reps": "30 sec",
    "restSec": 45,
    "alternative": "plank"
  },
  {
    "id": "kettlebell-swing",
    "nameEn": "Kettlebell Swing",
    "nameRu": "Махи гирей",
    "category": "Functional Training",
    "equipment": [
      "Kettlebell"
    ],
    "difficulty": "Intermediate",
    "pattern": "kettlebellSwing",
    "targetMuscles": [
      "Glutes",
      "Hamstrings",
      "Core"
    ],
    "secondaryMuscles": [
      "Lower Back",
      "Forearms"
    ],
    "purpose": "A powerful hip-hinge exercise that builds explosive glute and hamstring power while also training your cardio — a cornerstone of functional, athletic conditioning.",
    "recommendedRIR": "Stop 1-2 reps before technical breakdown — these rely on speed and power, not grinding reps",
    "media": "/images/exercises/kettlebell-swing.gif",
    "startingPosition": "Standing with feet shoulder-width apart, kettlebell on the floor slightly in front, hips hinged back.",
    "steps": [
      "Hike the kettlebell back between the legs.",
      "Explosively drive the hips forward to swing the kettlebell up to chest height.",
      "Let the kettlebell swing back down, hinging the hips to absorb it."
    ],
    "bodyPosition": "Power comes from the hips, not the arms or lower back.",
    "rangeOfMotion": "Kettlebell travels from between the legs to roughly chest height, driven by the hips.",
    "breathing": {
      "inhale": "Inhale as the kettlebell swings back.",
      "exhale": "Exhale sharply driving the hips forward."
    },
    "mistakes": [
      "Squatting the movement instead of hinging",
      "Using the arms to lift the weight",
      "Overextending the lower back at the top"
    ],
    "safetyNotes": "This is a hip-hinge, not a squat or a front-raise — rounding the back or muscling it up with the arms are the two most common injury mechanisms.",
    "sets": 4,
    "reps": "15",
    "restSec": 75,
    "alternative": "farmers-carry"
  },
  {
    "id": "farmers-carry",
    "nameEn": "Farmer's Carry",
    "nameRu": "Фермерская прогулка",
    "category": "Functional Training",
    "equipment": [
      "Kettlebell",
      "Dumbbell"
    ],
    "difficulty": "Beginner",
    "pattern": "carry",
    "targetMuscles": [
      "Forearms",
      "Traps",
      "Core"
    ],
    "secondaryMuscles": [
      "Core",
      "Quadriceps"
    ],
    "purpose": "Builds total-body strength, grip, and core stability under load — a true functional exercise that transfers to everything from grappling control to everyday carrying strength.",
    "recommendedRIR": "Stop 1-2 reps before technical breakdown — these rely on speed and power, not grinding reps",
    "media": "/images/exercises/farmers-carry.gif",
    "startingPosition": "Standing tall holding a heavy kettlebell or dumbbell in each hand at the sides.",
    "steps": [
      "Brace the core and walk forward with controlled, even steps.",
      "Keep the shoulders pulled back and down.",
      "Maintain the walk for the prescribed distance or time."
    ],
    "bodyPosition": "Tall posture throughout, avoid leaning to one side.",
    "rangeOfMotion": "No joint range beyond a normal walking gait — the load is carried, not lifted through a range.",
    "breathing": {
      "inhale": "Breathe steadily throughout the walk.",
      "exhale": "Exhale in rhythm with your steps."
    },
    "mistakes": [
      "Shrugging the shoulders up toward the ears",
      "Leaning side to side with each step"
    ],
    "safetyNotes": "Keep the shoulders packed down and back; letting a heavy load pull the shoulders up and forward stresses the neck and upper back.",
    "sets": 3,
    "reps": "40m",
    "restSec": 75,
    "alternative": "kettlebell-swing"
  },
  {
    "id": "battle-ropes-wave",
    "nameEn": "Battle Ropes Wave",
    "nameRu": "Волны канатами",
    "category": "Functional Training",
    "equipment": [
      "Battle Ropes"
    ],
    "difficulty": "Intermediate",
    "pattern": "battleRopes",
    "targetMuscles": [
      "Shoulders",
      "Core",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Core",
      "Forearms"
    ],
    "purpose": "A brutal shoulder and core conditioning tool that builds the muscular endurance needed to keep your hands up and strikes sharp deep into a fight.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/battle-ropes-wave.gif",
    "startingPosition": "Athletic stance with knees slightly bent, one rope end in each hand, arms extended toward the anchor.",
    "steps": [
      "Alternately whip each arm up and down to create traveling waves in the rope.",
      "Keep the core braced and knees soft throughout.",
      "Maintain a consistent rhythm for the work interval."
    ],
    "bodyPosition": "Athletic stance maintained, avoid standing fully upright and stiff.",
    "rangeOfMotion": "Arms alternate from overhead to below shoulder height in continuous waves.",
    "breathing": {
      "inhale": "Breathe rhythmically with the waves.",
      "exhale": "Exhale forcefully on each whip."
    },
    "mistakes": [
      "Standing too upright, losing power from the legs",
      "Only moving the forearms instead of the whole arm"
    ],
    "safetyNotes": "Keep a soft athletic stance throughout — locking the knees straight transfers the workload onto the lower back.",
    "sets": 4,
    "reps": "20-30 sec",
    "restSec": 45,
    "alternative": "kettlebell-swing"
  },
  {
    "id": "box-jump",
    "nameEn": "Box Jump",
    "nameRu": "Прыжки на тумбу",
    "category": "Functional Training",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "squat",
    "targetMuscles": [
      "Quadriceps",
      "Glutes",
      "Calves"
    ],
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "purpose": "Builds explosive leg power, directly improving your ability to generate force quickly — the same quality behind a fast sprint start or an explosive takedown.",
    "recommendedRIR": "Stop 1-2 reps before technical breakdown — these rely on speed and power, not grinding reps",
    "startingPosition": "Standing a short distance from a sturdy box, feet shoulder-width apart.",
    "steps": [
      "Dip the hips and swing the arms back to load the jump.",
      "Explode upward and forward, landing softly on top of the box.",
      "Stand up fully, then step back down carefully."
    ],
    "bodyPosition": "Land with soft knees, absorbing the impact rather than landing stiff-legged.",
    "rangeOfMotion": "Hips dip and then extend explosively to project the body onto the box.",
    "breathing": {
      "inhale": "Inhale before the jump.",
      "exhale": "Exhale explosively on takeoff."
    },
    "mistakes": [
      "Choosing a box that is too high for clean technique",
      "Landing with stiff, locked knees",
      "Rounding the back when landing"
    ],
    "safetyNotes": "Step down off the box rather than jumping back down — landing a jump from height is a common source of ankle and knee injuries.",
    "sets": 4,
    "reps": "6-8",
    "restSec": 90,
    "alternative": "barbell-squat"
  },
  {
    "id": "medicine-ball-slam",
    "nameEn": "Medicine Ball Slam",
    "nameRu": "Броски медбола об пол",
    "category": "Functional Training",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "kettlebellSwing",
    "targetMuscles": [
      "Core",
      "Shoulders",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Lower Back"
    ],
    "purpose": "Trains your whole body to generate explosive power from the ground up, building the same full-body force production used in strikes and throws.",
    "recommendedRIR": "Stop 1-2 reps before technical breakdown — these rely on speed and power, not grinding reps",
    "media": "/images/exercises/medicine-ball-slam.gif",
    "startingPosition": "Standing with feet shoulder-width apart, medicine ball held overhead with both hands.",
    "steps": [
      "Brace the core and forcefully slam the ball down to the floor.",
      "Hinge the hips slightly as you slam.",
      "Catch the bounce (or pick the ball back up) and reset overhead."
    ],
    "bodyPosition": "Full body engages in the slam, power transfers from legs through the core to the arms.",
    "rangeOfMotion": "Ball travels from overhead to the floor, full body involved in the slam.",
    "breathing": {
      "inhale": "Inhale raising the ball overhead.",
      "exhale": "Exhale sharply on the slam."
    },
    "mistakes": [
      "Slamming with only the arms",
      "Rounding the back excessively on the follow-through"
    ],
    "safetyNotes": "Use a ball that will not bounce back dangerously, and keep a slight knee bend on the follow-through to protect the lower back.",
    "sets": 4,
    "reps": "12",
    "restSec": 60,
    "alternative": "kettlebell-swing"
  },
  {
    "id": "sled-push",
    "nameEn": "Sled Push",
    "nameRu": "Толкание саней",
    "category": "Functional Training",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Intermediate",
    "pattern": "carry",
    "targetMuscles": [
      "Legs",
      "Core",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Builds raw leg drive and conditioning with almost no impact on the joints — excellent for both strength and the aerobic endurance goal of the program.",
    "recommendedRIR": "Stop 1-2 reps before technical breakdown — these rely on speed and power, not grinding reps",
    "startingPosition": "Hands on the sled handles, arms extended, body leaning forward at roughly 45 degrees.",
    "steps": [
      "Drive the legs in short, powerful steps to push the sled forward.",
      "Keep the core braced and back flat throughout.",
      "Maintain the drive for the prescribed distance."
    ],
    "bodyPosition": "Forward lean maintained, avoid standing upright which reduces drive power.",
    "rangeOfMotion": "No joint range beyond a normal driving stride against resistance.",
    "breathing": {
      "inhale": "Breathe rhythmically with your stride.",
      "exhale": "Exhale forcefully with each drive."
    },
    "mistakes": [
      "Standing too upright",
      "Taking overly long strides instead of quick, powerful steps"
    ],
    "safetyNotes": "Keep the arms extended and the back flat — rounding forward under load strains the lower back.",
    "sets": 4,
    "reps": "20m",
    "restSec": 90,
    "alternative": "farmers-carry"
  },
  {
    "id": "turkish-get-up",
    "nameEn": "Turkish Get-Up",
    "nameRu": "Турецкий подъём",
    "category": "Functional Training",
    "equipment": [
      "Kettlebell"
    ],
    "difficulty": "Advanced",
    "pattern": "kettlebellSwing",
    "targetMuscles": [
      "Core",
      "Shoulders",
      "Full Body"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Hips"
    ],
    "purpose": "A slow, demanding full-body exercise that builds shoulder stability, core strength, and coordination — a true test and builder of functional, athletic fitness.",
    "recommendedRIR": "Stop 1-2 reps before technical breakdown — these rely on speed and power, not grinding reps",
    "media": "/images/exercises/turkish-get-up.gif",
    "startingPosition": "Lying on your back, kettlebell pressed overhead in one hand, same-side knee bent and foot planted.",
    "steps": [
      "Roll onto the opposite forearm, then hand, keeping the kettlebell locked out overhead.",
      "Sweep the back leg through and come up onto the knee.",
      "Stand up fully, then reverse the sequence back down to the floor."
    ],
    "bodyPosition": "Eyes stay on the kettlebell throughout, movement stays slow and controlled.",
    "rangeOfMotion": "Full-body transition from lying on the floor to standing, weight locked overhead throughout.",
    "breathing": {
      "inhale": "Inhale during the transitions.",
      "exhale": "Exhale during each pressing or standing phase."
    },
    "mistakes": [
      "Rushing through the sequence",
      "Letting the arm drift out of a vertical lockout"
    ],
    "safetyNotes": "Learn the sequence with no weight first — this move has many transition points where a loaded error can strain the shoulder.",
    "sets": 3,
    "reps": "5 per side",
    "restSec": 90,
    "alternative": "kettlebell-swing"
  },
  {
    "id": "burpee",
    "nameEn": "Burpee",
    "nameRu": "Бёрпи",
    "category": "Functional Training",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "squat",
    "targetMuscles": [
      "Full Body",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Chest",
      "Quadriceps"
    ],
    "purpose": "A full-body conditioning move that builds cardio endurance and functional strength together, making it a staple for combat-sport conditioning.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/burpee.gif",
    "startingPosition": "Standing tall with feet shoulder-width apart.",
    "steps": [
      "Squat down and place the hands on the floor.",
      "Kick the feet back into a plank position.",
      "Perform a push-up, then jump the feet back toward the hands.",
      "Explode upward into a jump, reaching overhead."
    ],
    "bodyPosition": "Keep a braced core through the plank and push-up phase to protect the lower back.",
    "rangeOfMotion": "Full body travels from standing to a floor plank/push-up and back to a standing jump.",
    "breathing": {
      "inhale": "Inhale going into the plank.",
      "exhale": "Exhale exploding up into the jump."
    },
    "mistakes": [
      "Sagging hips during the plank/push-up phase",
      "Landing the jump with stiff knees"
    ],
    "safetyNotes": "Step back into the plank instead of jumping if your lower back rounds under fatigue.",
    "sets": 4,
    "reps": "10",
    "restSec": 75,
    "alternative": "box-jump"
  },
  {
    "id": "shadow-boxing",
    "nameEn": "Shadow Boxing",
    "nameRu": "Бой с тенью",
    "category": "MMA",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "punch",
    "targetMuscles": [
      "Shoulders",
      "Core",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Legs",
      "Core"
    ],
    "purpose": "Builds striking technique, footwork, and cardio without any equipment — the foundation for sharpening the hands and movement you’ll use on the bag and in sparring.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Boxing guard stance, hands up near the chin, knees soft, weight balanced on the balls of the feet.",
    "steps": [
      "Throw combinations of jabs, crosses, hooks, and uppercuts at an imaginary target.",
      "Move the feet continuously, never standing flat-footed.",
      "Focus on sharp, controlled technique rather than speed alone."
    ],
    "bodyPosition": "Guard stays up between combinations, chin tucked, core engaged for rotation.",
    "rangeOfMotion": "Full punching and footwork range against no resistance.",
    "breathing": {
      "inhale": "Inhale between combinations.",
      "exhale": "Exhale sharply on each strike."
    },
    "mistakes": [
      "Dropping the guard between combinations",
      "Standing flat-footed instead of staying light"
    ],
    "safetyNotes": "Keep the guard up and chin tucked even without an opponent — this is where good habits are built or lost.",
    "sets": 5,
    "reps": "2 min rounds",
    "restSec": 60,
    "alternative": "heavy-bag-combinations"
  },
  {
    "id": "heavy-bag-combinations",
    "nameEn": "Heavy Bag Combinations",
    "nameRu": "Комбинации на тяжёлом мешке",
    "category": "MMA",
    "equipment": [
      "Boxing Bag"
    ],
    "difficulty": "Intermediate",
    "pattern": "punch",
    "targetMuscles": [
      "Shoulders",
      "Core",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Legs",
      "Core"
    ],
    "purpose": "Builds real striking power, combination fluency, and the muscular endurance to keep throwing hard punches deep into a round.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Guard stance in front of the heavy bag, hands up, comfortable striking distance.",
    "steps": [
      "Throw 3-5 punch combinations with full hip rotation behind each strike.",
      "Reset the guard immediately after each combination.",
      "Circle the bag between combinations rather than standing still."
    ],
    "bodyPosition": "Rotate the hips and pivot the rear foot to generate power, not just the arms.",
    "rangeOfMotion": "Full punching range with impact against the bag.",
    "breathing": {
      "inhale": "Inhale resetting the guard.",
      "exhale": "Exhale sharply on each punch."
    },
    "mistakes": [
      "Punching with only the arm, no hip rotation",
      "Standing directly in front of the bag without footwork"
    ],
    "safetyNotes": "Wrap your hands and use gloves appropriate to bag work to protect the wrists and knuckles.",
    "sets": 6,
    "reps": "3 min rounds",
    "restSec": 60,
    "alternative": "shadow-boxing"
  },
  {
    "id": "knee-strikes",
    "nameEn": "Knee Strikes (Bag)",
    "nameRu": "Удары коленом по мешку",
    "category": "MMA",
    "equipment": [
      "Boxing Bag"
    ],
    "difficulty": "Intermediate",
    "pattern": "kick",
    "targetMuscles": [
      "Hip Flexors",
      "Core",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "purpose": "Builds explosive hip-driven striking power for close-range exchanges and clinch work, a key MMA-specific skill this program targets.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Clinch-style grip on the bag (or imaginary partner), weight balanced on the base leg.",
    "steps": [
      "Drive the knee upward and forward into the bag, pulling it into the strike.",
      "Pivot slightly on the base foot to add hip drive.",
      "Return the striking leg to the ground under control before the next rep."
    ],
    "bodyPosition": "Core braced throughout, posture stays tall rather than leaning back.",
    "rangeOfMotion": "Knee drives from the base stance up and into the target.",
    "breathing": {
      "inhale": "Inhale loading the knee.",
      "exhale": "Exhale driving the strike."
    },
    "mistakes": [
      "Leaning backward instead of driving the hips forward",
      "Striking with the shin instead of the top of the knee"
    ],
    "safetyNotes": "Keep the posted/base leg slightly bent — a locked standing leg is unstable and easy to injure if the strike is checked.",
    "sets": 4,
    "reps": "10 per side",
    "restSec": 60,
    "alternative": "heavy-bag-combinations"
  },
  {
    "id": "elbow-strikes",
    "nameEn": "Elbow Strikes (Bag)",
    "nameRu": "Удары локтем по мешку",
    "category": "MMA",
    "equipment": [
      "Boxing Bag"
    ],
    "difficulty": "Intermediate",
    "pattern": "punch",
    "targetMuscles": [
      "Shoulders",
      "Core"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Develops tight, powerful close-range striking technique that is crucial in clinch and ground-and-pound situations.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Close range guard stance in front of the bag, elbow bent and tucked.",
    "steps": [
      "Rotate the hips and shoulders to drive the elbow horizontally into the bag.",
      "Keep the strike tight and compact, not winding up.",
      "Return to guard immediately after contact."
    ],
    "bodyPosition": "Hips and shoulders rotate together, base foot pivots to add power.",
    "rangeOfMotion": "Short, compact elbow arc driven by hip and shoulder rotation.",
    "breathing": {
      "inhale": "Inhale resetting.",
      "exhale": "Exhale on the strike."
    },
    "mistakes": [
      "Winding up with a wide telegraphed motion",
      "Not rotating the hips behind the strike"
    ],
    "safetyNotes": "Keep the strikes tight and controlled on the bag — a fully extended, wild swing risks the elbow joint itself.",
    "sets": 4,
    "reps": "10 per side",
    "restSec": 60,
    "alternative": "heavy-bag-combinations"
  },
  {
    "id": "clinch-work",
    "nameEn": "Clinch Work",
    "nameRu": "Работа в клинче",
    "category": "MMA",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "clinchWrestling",
    "targetMuscles": [
      "Upper Back",
      "Core",
      "Forearms"
    ],
    "secondaryMuscles": [
      "Forearms",
      "Legs"
    ],
    "purpose": "Builds the strength, balance, and technique to control an opponent at close range — a core MMA skill that combines strength, grip, and technique.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Collar-tie grip on a partner or bag, forehead-to-forehead distance, knees bent and base wide.",
    "steps": [
      "Off-balance the opponent by pulling and pushing in short, sharp bursts.",
      "Work knee strikes into the clinch control.",
      "Maintain a strong, low base throughout the exchange."
    ],
    "bodyPosition": "Hips stay low and wide for a stable base, head stays up and alert.",
    "rangeOfMotion": "Short-range pushing, pulling and off-balancing against a partner or bag.",
    "breathing": {
      "inhale": "Inhale between bursts.",
      "exhale": "Exhale on each off-balancing pull or strike."
    },
    "mistakes": [
      "Standing too tall, raising the center of gravity",
      "Gripping with the arms only, not engaging the whole body"
    ],
    "safetyNotes": "Keep the neck neutral and avoid overextending when pulling down on the head/neck area of a real partner.",
    "sets": 5,
    "reps": "2 min rounds",
    "restSec": 60,
    "alternative": "sprawl-drill"
  },
  {
    "id": "sprawl-drill",
    "nameEn": "Sprawl Drill",
    "nameRu": "Отработка спрола",
    "category": "MMA",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "takedownWrestling",
    "targetMuscles": [
      "Core",
      "Shoulders",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Shoulders"
    ],
    "purpose": "Trains the reflex and strength to defend takedowns instantly — one of the most important defensive skills in MMA.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Athletic guard stance, hands up, weight balanced.",
    "steps": [
      "Shoot the hips back and drop the chest toward the floor as if defending a takedown.",
      "Land with the legs spread wide and hips heavy, hands pressing down near an imaginary opponent's shoulders.",
      "Recover quickly back to the standing guard stance."
    ],
    "bodyPosition": "Hips drop below the shoulders, weight distributed down and back on the opponent.",
    "rangeOfMotion": "Hips travel from a standing guard down to a sprawled position with legs extended back.",
    "breathing": {
      "inhale": "Inhale in the guard stance.",
      "exhale": "Exhale sharply on the sprawl."
    },
    "mistakes": [
      "Dropping the head instead of keeping it up",
      "Legs too narrow, allowing an easy takedown"
    ],
    "safetyNotes": "Land the sprawl on the thighs/hips, not with locked-out arms taking the full impact.",
    "sets": 4,
    "reps": "10",
    "restSec": 60,
    "alternative": "double-leg-takedown"
  },
  {
    "id": "jab-cross-combo",
    "nameEn": "Jab-Cross Combination",
    "nameRu": "Комбинация джеб-кросс",
    "category": "Boxing",
    "equipment": [
      "Boxing Bag"
    ],
    "difficulty": "Beginner",
    "pattern": "punch",
    "targetMuscles": [
      "Shoulders",
      "Core"
    ],
    "secondaryMuscles": [
      "Legs",
      "Core"
    ],
    "purpose": "The most fundamental boxing combination — builds the timing, technique, and power that every other striking combination is built on.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Boxing stance, lead hand and rear hand both guarding the chin.",
    "steps": [
      "Snap the lead hand straight out into a jab, rotating the fist on impact.",
      "Immediately follow with a cross from the rear hand, rotating the hips and rear foot.",
      "Retract both hands back to guard quickly after contact."
    ],
    "bodyPosition": "Weight transfers from front to back foot between the jab and cross.",
    "rangeOfMotion": "Alternating straight-arm extensions with hip and foot rotation on the cross.",
    "breathing": {
      "inhale": "Inhale in guard.",
      "exhale": "Exhale sharply with each punch."
    },
    "mistakes": [
      "Dropping the guard hand while punching with the other",
      "Not rotating the hips on the cross"
    ],
    "safetyNotes": "Keep the non-punching hand up at the chin at all times — this is the single most common guard mistake.",
    "sets": 5,
    "reps": "2 min rounds",
    "restSec": 60,
    "alternative": "hook-combination"
  },
  {
    "id": "hook-combination",
    "nameEn": "Hook Combination",
    "nameRu": "Комбинация с хуком",
    "category": "Boxing",
    "equipment": [
      "Boxing Bag"
    ],
    "difficulty": "Intermediate",
    "pattern": "punch",
    "targetMuscles": [
      "Shoulders",
      "Core",
      "Obliques"
    ],
    "secondaryMuscles": [
      "Legs"
    ],
    "purpose": "Builds hip-and-shoulder rotational power and the technique to land hooks effectively, adding real variety and power to your striking.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Boxing stance at close-to-medium range from the bag.",
    "steps": [
      "Pivot on the lead foot while rotating the torso to throw a lead hook.",
      "Follow with a rear hook, pivoting on the rear foot.",
      "Return to a tight guard between each hook."
    ],
    "bodyPosition": "Power comes from hip and foot rotation, elbow stays at roughly shoulder height.",
    "rangeOfMotion": "Arm travels in a short horizontal arc with hip and foot pivot.",
    "breathing": {
      "inhale": "Inhale in guard.",
      "exhale": "Exhale on each hook."
    },
    "mistakes": [
      "Swinging with a straight, winding arm instead of a tight hook",
      "Not pivoting the feet"
    ],
    "safetyNotes": "Keep the elbow near shoulder height, not dropped — a dropped hook telegraphs the punch and stresses the shoulder.",
    "sets": 5,
    "reps": "2 min rounds",
    "restSec": 60,
    "alternative": "jab-cross-combo"
  },
  {
    "id": "slip-and-counter",
    "nameEn": "Slip & Counter Drill",
    "nameRu": "Уклон и контратака",
    "category": "Boxing",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "punch",
    "targetMuscles": [
      "Core",
      "Legs"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Trains head movement and reaction speed, teaching you to avoid strikes while staying in position to counter — essential defensive skill-building.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Boxing guard stance, knees soft, ready to shift weight laterally.",
    "steps": [
      "Slip the head slightly off the centerline by bending the knees and rotating the torso.",
      "Immediately counter with a cross or hook as the head returns to center.",
      "Reset to guard quickly after the counter."
    ],
    "bodyPosition": "Movement comes from the legs and core, not just leaning the head sideways.",
    "rangeOfMotion": "Small lateral head movement off the centerline, driven by the knees and hips, not the neck.",
    "breathing": {
      "inhale": "Inhale on the slip.",
      "exhale": "Exhale on the counter punch."
    },
    "mistakes": [
      "Leaning only from the waist, leaving the legs stationary",
      "Pausing too long before countering"
    ],
    "safetyNotes": "Keep the slip small and controlled — slipping too far off balance leaves you unable to counter or defend the follow-up.",
    "sets": 5,
    "reps": "2 min rounds",
    "restSec": 60,
    "alternative": "jab-cross-combo"
  },
  {
    "id": "footwork-ladder-drill",
    "nameEn": "Footwork Ladder Drill",
    "nameRu": "Работа ног с координационной лестницей",
    "category": "Boxing",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "sprintCardio",
    "targetMuscles": [
      "Calves",
      "Cardio",
      "Coordination"
    ],
    "secondaryMuscles": [
      "Calves",
      "Core"
    ],
    "purpose": "Builds the quick, light footwork that underlies all effective striking and movement — better footwork means better positioning and harder-to-hit targets.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Standing at one end of an agility ladder (or marked floor squares), light athletic stance.",
    "steps": [
      "Move quickly through each rung using short, light steps.",
      "Keep the upper body in a guard position throughout.",
      "Repeat using different stepping patterns (in-in-out-out, lateral shuffle, etc)."
    ],
    "bodyPosition": "Stay on the balls of the feet, knees soft, eyes up rather than looking down at the feet.",
    "rangeOfMotion": "Short, quick steps through the ladder rungs.",
    "breathing": {
      "inhale": "Breathe rhythmically with each step pattern.",
      "exhale": "Exhale in rhythm with faster footwork bursts."
    },
    "mistakes": [
      "Looking down at the feet instead of up",
      "Flat-footed, heavy steps"
    ],
    "safetyNotes": "Keep the eyes up, not on the feet — looking down is both a technical error and a trip hazard.",
    "sets": 4,
    "reps": "20 sec",
    "restSec": 40,
    "alternative": "shadow-boxing"
  },
  {
    "id": "double-end-bag-drill",
    "nameEn": "Double-End Bag Drill",
    "nameRu": "Работа на пневмогруше",
    "category": "Boxing",
    "equipment": [
      "Boxing Bag"
    ],
    "difficulty": "Advanced",
    "pattern": "punch",
    "targetMuscles": [
      "Shoulders",
      "Reflexes",
      "Core"
    ],
    "secondaryMuscles": [
      "Legs",
      "Core"
    ],
    "purpose": "Sharpens accuracy, timing, and reflexes against an unpredictable moving target, translating directly to better performance against a live opponent.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Guard stance centered in front of a double-end bag at comfortable punching range.",
    "steps": [
      "Throw sharp, straight punches at the bag as it rebounds.",
      "Track the bag's movement with your eyes and guard.",
      "Stay light on the feet, adjusting distance as the bag swings."
    ],
    "bodyPosition": "Guard stays tight to avoid being tapped by the rebounding bag.",
    "rangeOfMotion": "Full punching range reacting to an unpredictable, fast-moving target.",
    "breathing": {
      "inhale": "Inhale between punches.",
      "exhale": "Exhale sharply with each strike."
    },
    "mistakes": [
      "Dropping the guard after punching",
      "Over-committing to power instead of timing and accuracy"
    ],
    "safetyNotes": "Start at a slower bag speed/tension until your timing is reliable — getting tapped by the rebounding bag repeatedly reinforces a dropped guard.",
    "sets": 5,
    "reps": "2 min rounds",
    "restSec": 60,
    "alternative": "jab-cross-combo"
  },
  {
    "id": "double-leg-takedown",
    "nameEn": "Double Leg Takedown",
    "nameRu": "Проход в ноги (двойной захват)",
    "category": "Wrestling",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "takedownWrestling",
    "targetMuscles": [
      "Legs",
      "Core",
      "Back"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Lower Back"
    ],
    "purpose": "The highest-percentage wrestling takedown in MMA — builds the strength, timing, and technique to bring a fight to the ground on your terms.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Wrestling stance, knees bent, lead hand extended, weight balanced low.",
    "steps": [
      "Penetrate forward with a deep step, dropping the hips low.",
      "Wrap both arms around the opponent's legs just above the knees.",
      "Drive through with the head up and legs to complete the takedown."
    ],
    "bodyPosition": "Head stays up throughout the shot, back stays flat rather than rounded.",
    "rangeOfMotion": "Full body drops level and drives forward and up through the opponent's legs.",
    "breathing": {
      "inhale": "Inhale loading the stance.",
      "exhale": "Exhale explosively on the penetration step."
    },
    "mistakes": [
      "Dropping the head down during the shot",
      "Shooting from too far away",
      "Rounding the back"
    ],
    "safetyNotes": "Always keep the head up and to the side, never down between the legs — head-down shots are how necks get injured.",
    "sets": 4,
    "reps": "8",
    "restSec": 90,
    "alternative": "single-leg-takedown"
  },
  {
    "id": "single-leg-takedown",
    "nameEn": "Single Leg Takedown",
    "nameRu": "Проход в одну ногу",
    "category": "Wrestling",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "takedownWrestling",
    "targetMuscles": [
      "Legs",
      "Core",
      "Grip"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Grip"
    ],
    "purpose": "A versatile takedown for a range of distances and angles, rounding out your offensive wrestling toolkit.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Wrestling stance with a slight angle, lead hand reaching to control a wrist or collar.",
    "steps": [
      "Step deep and secure one of the opponent's legs behind the knee.",
      "Drive the head into the hip to off-balance them.",
      "Finish by lifting or running the leg to bring them down."
    ],
    "bodyPosition": "Base stays wide and low, head drives forward rather than down.",
    "rangeOfMotion": "Body levels down to secure one leg, then drives through to finish.",
    "breathing": {
      "inhale": "Inhale setting up the entry.",
      "exhale": "Exhale driving through the finish."
    },
    "mistakes": [
      "Standing too upright during the finish",
      "Letting go of the controlled leg too early"
    ],
    "safetyNotes": "Control the leg fully before committing your weight forward — a half-secured leg is how scrambles turn into awkward falls.",
    "sets": 4,
    "reps": "8 per side",
    "restSec": 90,
    "alternative": "double-leg-takedown"
  },
  {
    "id": "sprawl",
    "nameEn": "Sprawl (Takedown Defense)",
    "nameRu": "Спрол (защита от тейкдауна)",
    "category": "Wrestling",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "takedownWrestling",
    "targetMuscles": [
      "Core",
      "Shoulders",
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Hip Flexors"
    ],
    "purpose": "The core takedown-defense skill in MMA — a strong sprawl keeps you standing and in control when an opponent shoots in.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Wrestling stance, hands active and ready to react.",
    "steps": [
      "As the shot comes in, kick the legs back and drop the hips heavily.",
      "Press the weight down through the opponent's shoulders.",
      "Circle to the side to regain a dominant angle."
    ],
    "bodyPosition": "Hips drop below shoulder level, legs spread wide for a stable base.",
    "rangeOfMotion": "Hips travel from standing guard down to a wide, heavy sprawled position.",
    "breathing": {
      "inhale": "Inhale in the ready stance.",
      "exhale": "Exhale sharply as the hips drop."
    },
    "mistakes": [
      "Dropping straight down instead of kicking the legs back",
      "Keeping the legs too close together"
    ],
    "safetyNotes": "Land with the hips heavy and legs wide rather than dropping straight down onto locked arms.",
    "sets": 4,
    "reps": "10",
    "restSec": 75,
    "alternative": "sprawl-drill"
  },
  {
    "id": "stand-up-escape",
    "nameEn": "Stand-Up Escape",
    "nameRu": "Вставание из нижней позиции",
    "category": "Wrestling",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "squat",
    "targetMuscles": [
      "Legs",
      "Core",
      "Back"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "Builds the strength and technique to return to your feet from the bottom position, a critical skill for controlling where a fight takes place.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Down on all fours (base position), imaginary opponent controlling from behind.",
    "steps": [
      "Post one foot flat on the floor, staggering the stance.",
      "Drive through that foot to stand up explosively, keeping the base wide.",
      "Clear the hips away to create space as you reach standing."
    ],
    "bodyPosition": "Head and chest lift first, weight drives through the posted foot.",
    "rangeOfMotion": "Body travels from a grounded base position up to a staggered standing position.",
    "breathing": {
      "inhale": "Inhale in the base position.",
      "exhale": "Exhale driving up to stand."
    },
    "mistakes": [
      "Standing straight up without staggering the base",
      "Not clearing the hips away from control"
    ],
    "safetyNotes": "Post on a flat foot, not the toes, when driving up — a slipping post foot is the main failure point.",
    "sets": 4,
    "reps": "8",
    "restSec": 75,
    "alternative": "double-leg-takedown"
  },
  {
    "id": "hip-toss",
    "nameEn": "Hip Toss",
    "nameRu": "Бросок через бедро",
    "category": "Wrestling",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Advanced",
    "pattern": "clinchWrestling",
    "targetMuscles": [
      "Core",
      "Back",
      "Legs"
    ],
    "secondaryMuscles": [
      "Core",
      "Legs"
    ],
    "purpose": "Builds throwing technique and the hip-rotation power to take an opponent down from a clinch position.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Clinch grip secured, hips turned into the opponent, same-side foot stepped across.",
    "steps": [
      "Load the opponent's weight onto your hip by pulling them off balance.",
      "Rotate the hips sharply while pulling with the arms.",
      "Guide the throw down under control, maintaining the grip."
    ],
    "bodyPosition": "Knees bent to get hip height below the opponent's center of gravity.",
    "rangeOfMotion": "Hips rotate under the opponent's center of gravity before the throwing rotation.",
    "breathing": {
      "inhale": "Inhale loading the position.",
      "exhale": "Exhale explosively on the rotation."
    },
    "mistakes": [
      "Standing too tall, throwing from above the opponent's center of gravity",
      "Using the arms alone without hip rotation"
    ],
    "safetyNotes": "Practice at low speed with a cooperative partner and proper mats before any live resistance — throws carry real fall-impact risk.",
    "sets": 3,
    "reps": "6 per side",
    "restSec": 90,
    "alternative": "clinch-work"
  },
  {
    "id": "treadmill-sprint-intervals",
    "nameEn": "Treadmill Sprint Intervals",
    "nameRu": "Спринтерские интервалы на беговой дорожке",
    "category": "Cardio",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Intermediate",
    "pattern": "sprintCardio",
    "targetMuscles": [
      "Legs",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "purpose": "Builds the high-intensity cardio capacity needed to sustain output across hard rounds, directly serving the program’s endurance goal.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Standing on the treadmill belt, light jog to warm up before the first interval.",
    "steps": [
      "Sprint at a high effort for the work interval.",
      "Reduce to an easy walk or jog for the recovery interval.",
      "Repeat for the prescribed number of rounds."
    ],
    "bodyPosition": "Slight forward lean from the ankles, arms driving in rhythm with the legs.",
    "rangeOfMotion": "Normal running gait at high speed.",
    "breathing": {
      "inhale": "Inhale during recovery.",
      "exhale": "Exhale rhythmically during the sprint."
    },
    "mistakes": [
      "Leaning back and reaching for the handrails",
      "Starting the sprint before the belt speed is ready"
    ],
    "safetyNotes": "Let the belt reach full speed before starting your sprint stride, and never dismount directly from a run — always slow to a stop first.",
    "sets": 8,
    "reps": "30 sec sprint / 60 sec walk",
    "restSec": 0,
    "alternative": "jump-rope"
  },
  {
    "id": "jump-rope",
    "nameEn": "Jump Rope",
    "nameRu": "Скакалка",
    "category": "Cardio",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "sprintCardio",
    "targetMuscles": [
      "Calves",
      "Cardio",
      "Coordination"
    ],
    "secondaryMuscles": [
      "Shoulders",
      "Core"
    ],
    "purpose": "A classic combat-sport conditioning tool that builds footwork, coordination, and cardio endurance all at once.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/jump-rope.gif",
    "startingPosition": "Standing tall, rope handles held at the hips, wrists doing most of the rope rotation.",
    "steps": [
      "Rotate the rope using the wrists, not large arm swings.",
      "Jump just high enough to clear the rope with light, quick bounces.",
      "Maintain a steady rhythm for the work interval."
    ],
    "bodyPosition": "Land softly on the balls of the feet, knees slightly bent to absorb impact.",
    "rangeOfMotion": "Small ankle-driven hops clearing the rope.",
    "breathing": {
      "inhale": "Breathe rhythmically with the jumps.",
      "exhale": "Exhale in rhythm, avoid holding the breath."
    },
    "mistakes": [
      "Jumping too high with each rep",
      "Swinging the rope with the whole arm instead of the wrists"
    ],
    "safetyNotes": "Jump on a surface with some give (not bare concrete) to reduce repetitive impact on the shins and ankles.",
    "sets": 5,
    "reps": "60 sec",
    "restSec": 30,
    "alternative": "treadmill-sprint-intervals"
  },
  {
    "id": "rowing-machine",
    "nameEn": "Rowing Machine Intervals",
    "nameRu": "Интервалы на гребном тренажёре",
    "category": "Cardio",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Intermediate",
    "pattern": "horizontalPull",
    "targetMuscles": [
      "Back",
      "Legs",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Core",
      "Shoulders"
    ],
    "purpose": "A low-impact, full-body cardio exercise that builds both aerobic endurance and pulling strength at the same time.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Seated with feet strapped in, knees bent, handle gripped with arms extended.",
    "steps": [
      "Drive through the legs first, then lean back slightly and pull the handle to the ribs.",
      "Reverse the sequence: extend the arms, lean forward, then bend the knees to return.",
      "Repeat in a smooth, continuous rhythm for the interval."
    ],
    "bodyPosition": "Sequence is legs, then back, then arms on the drive; arms, back, then legs on the return.",
    "rangeOfMotion": "Full drive from knees bent/arms extended to legs extended/handle at the ribs.",
    "breathing": {
      "inhale": "Inhale on the recovery (forward) phase.",
      "exhale": "Exhale on the drive (pull) phase."
    },
    "mistakes": [
      "Pulling with the arms before driving the legs",
      "Rounding the back excessively during the drive"
    ],
    "safetyNotes": "Sequence the drive as legs-back-arms and the return as arms-back-legs — reversing the order is a common lower-back stressor.",
    "sets": 5,
    "reps": "500m",
    "restSec": 60,
    "alternative": "treadmill-sprint-intervals"
  },
  {
    "id": "assault-bike-intervals",
    "nameEn": "Assault Bike Intervals",
    "nameRu": "Интервалы на велотренажёре Assault Bike",
    "category": "Cardio",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Intermediate",
    "pattern": "sprintCardio",
    "targetMuscles": [
      "Legs",
      "Shoulders",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Legs",
      "Core"
    ],
    "purpose": "One of the most demanding conditioning tools available — builds the kind of brutal cardio capacity needed to keep performing in later rounds.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/assault-bike-intervals.gif",
    "startingPosition": "Seated on the bike, hands gripping the moving handles, feet secured on the pedals.",
    "steps": [
      "Drive the legs and pump the arms together at maximum effort for the work interval.",
      "Slow to an easy pace for the recovery interval.",
      "Repeat for the prescribed rounds."
    ],
    "bodyPosition": "Core braced to stabilize the torso as the arms and legs drive together.",
    "rangeOfMotion": "Full pedal and arm-handle range at high effort.",
    "breathing": {
      "inhale": "Inhale during recovery.",
      "exhale": "Exhale rhythmically during the hard effort."
    },
    "mistakes": [
      "Only pedaling with the legs and ignoring the arms",
      "Starting too hard and fading before the interval ends"
    ],
    "safetyNotes": "Keep a stable seated position — standing or rocking hard on the bike during sprints can strain the lower back.",
    "sets": 6,
    "reps": "20 sec on / 40 sec off",
    "restSec": 0,
    "alternative": "treadmill-sprint-intervals"
  },
  {
    "id": "stair-climber",
    "nameEn": "Stair Climber",
    "nameRu": "Степпер (лестничный тренажёр)",
    "category": "Cardio",
    "equipment": [
      "Machine"
    ],
    "difficulty": "Beginner",
    "pattern": "lunge",
    "targetMuscles": [
      "Legs",
      "Glutes",
      "Cardio"
    ],
    "secondaryMuscles": [
      "Calves"
    ],
    "purpose": "Builds leg endurance and aerobic capacity with low impact on the joints, supporting the program’s general endurance goal.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Standing on the pedals or steps, light grip on the handles for balance only.",
    "steps": [
      "Step in a steady, controlled rhythm, pressing fully through each foot.",
      "Avoid leaning heavily on the handrails to offload bodyweight.",
      "Maintain a consistent pace for the duration."
    ],
    "bodyPosition": "Upright posture, core engaged, light touch on the handrails.",
    "rangeOfMotion": "Normal stepping range against continuous resistance.",
    "breathing": {
      "inhale": "Breathe steadily throughout.",
      "exhale": "Exhale in rhythm with each step."
    },
    "mistakes": [
      "Leaning on the handrails and reducing the workload",
      "Taking short, shallow steps"
    ],
    "safetyNotes": "Keep a light hand on the rails for balance only, not to offload your body weight onto your arms.",
    "sets": 1,
    "reps": "15-20 min",
    "restSec": 0,
    "alternative": "walking-lunge"
  },
  {
    "id": "hip-flexor-stretch",
    "nameEn": "Kneeling Hip Flexor Stretch",
    "nameRu": "Растяжка сгибателей бедра в выпаде",
    "category": "Mobility",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "stretchMobility",
    "targetMuscles": [
      "Hip Flexors"
    ],
    "secondaryMuscles": [
      "Quadriceps"
    ],
    "purpose": "Loosens tight hip flexors from sitting and heavy squatting, restoring the hip mobility needed for deep squats, long strides, and high kicks.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/hip-flexor-stretch.gif",
    "startingPosition": "Kneeling lunge position, back knee on the floor, front foot planted ahead.",
    "steps": [
      "Shift the hips forward until a stretch is felt at the front of the back hip.",
      "Keep the torso tall rather than leaning forward.",
      "Hold the stretch, breathing steadily."
    ],
    "bodyPosition": "Pelvis tucks slightly under to deepen the stretch safely.",
    "rangeOfMotion": "Hips shift forward until a stretch is felt at the front of the rear hip.",
    "breathing": {
      "inhale": "Breathe slowly and deeply throughout the hold.",
      "exhale": "Exhale to help ease deeper into the stretch."
    },
    "mistakes": [
      "Leaning the torso forward instead of shifting the hips",
      "Overarching the lower back"
    ],
    "safetyNotes": "Stretch to mild tension, never pain — a sharp pinch in the front of the hip means back off the range.",
    "sets": 2,
    "reps": "30 sec per side",
    "restSec": 15,
    "alternative": "pigeon-pose"
  },
  {
    "id": "worlds-greatest-stretch",
    "nameEn": "World's Greatest Stretch",
    "nameRu": "Комплексная растяжка «лучшая в мире»",
    "category": "Mobility",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "stretchMobility",
    "targetMuscles": [
      "Hips",
      "Thoracic Spine",
      "Hamstrings"
    ],
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders"
    ],
    "purpose": "A full-body mobility sequence that opens up the hips, spine, and hamstrings together, keeping your whole body moving freely for training.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "media": "/images/exercises/worlds-greatest-stretch.gif",
    "startingPosition": "Long lunge position, both hands on the floor inside the front foot.",
    "steps": [
      "Rotate the torso and reach the inside hand toward the ceiling.",
      "Return the hand to the floor, then straighten the front leg for a hamstring stretch.",
      "Bend the front knee again and repeat the sequence."
    ],
    "bodyPosition": "Hips stay square to the front during the rotation phase.",
    "rangeOfMotion": "Combines a deep lunge, torso rotation and hamstring stretch in one flowing sequence.",
    "breathing": {
      "inhale": "Inhale rotating open.",
      "exhale": "Exhale returning to the lunge."
    },
    "mistakes": [
      "Rushing through the sequence without holding each position",
      "Letting the back knee lift off the floor too early"
    ],
    "safetyNotes": "Move slowly between positions — this is a mobility flow, not something to rush through for reps.",
    "sets": 2,
    "reps": "5 per side",
    "restSec": 20,
    "alternative": "hip-flexor-stretch"
  },
  {
    "id": "band-shoulder-dislocate",
    "nameEn": "Shoulder Dislocates (Band)",
    "nameRu": "Выкруты с резинкой",
    "category": "Mobility",
    "equipment": [
      "Bands"
    ],
    "difficulty": "Beginner",
    "pattern": "verticalPull",
    "targetMuscles": [
      "Shoulders"
    ],
    "secondaryMuscles": [],
    "purpose": "Improves shoulder mobility and joint health, which protects the shoulders during heavy pressing and overhead striking movements.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Standing tall, holding a resistance band with a wide, straight-arm grip in front of the body.",
    "steps": [
      "Raise the band overhead and continue rotating it behind the head and down to the lower back.",
      "Keep the arms as straight as possible throughout.",
      "Reverse the motion back to the starting position."
    ],
    "bodyPosition": "Core braced to avoid arching the back as the arms pass overhead.",
    "rangeOfMotion": "Arms travel from in front of the body, overhead, and down behind the back with a wide grip.",
    "breathing": {
      "inhale": "Inhale raising the band.",
      "exhale": "Exhale lowering it behind."
    },
    "mistakes": [
      "Gripping too narrow, limiting range and straining the shoulders",
      "Bending the elbows to compensate for tight shoulders"
    ],
    "safetyNotes": "Use a wide enough grip that the movement stays pain-free; a grip that's too narrow forces the shoulder past a safe range.",
    "sets": 2,
    "reps": "10-12",
    "restSec": 30,
    "alternative": "worlds-greatest-stretch"
  },
  {
    "id": "cat-cow-stretch",
    "nameEn": "Cat-Cow Stretch",
    "nameRu": "Растяжка «кошка-корова»",
    "category": "Mobility",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "stretchMobility",
    "targetMuscles": [
      "Spine",
      "Core"
    ],
    "secondaryMuscles": [
      "Core"
    ],
    "purpose": "A gentle spinal mobility movement that relieves tension and keeps the back moving well between heavy training days.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "On all fours, hands under the shoulders, knees under the hips.",
    "steps": [
      "Round the spine upward, tucking the chin and tailbone (cat).",
      "Reverse into an arch, lifting the chest and tailbone (cow).",
      "Flow smoothly between the two positions."
    ],
    "bodyPosition": "Movement flows through the entire spine, not just the lower or upper back alone.",
    "rangeOfMotion": "Spine moves from a full rounded flexion to a gentle extended arch.",
    "breathing": {
      "inhale": "Inhale into the cow (arch).",
      "exhale": "Exhale into the cat (round)."
    },
    "mistakes": [
      "Moving only the neck instead of the whole spine",
      "Rushing the transitions"
    ],
    "safetyNotes": "Keep the movement slow and within a comfortable range — this is a warm-up/recovery drill, not a loaded exercise.",
    "sets": 2,
    "reps": "10",
    "restSec": 15,
    "alternative": "thoracic-rotation"
  },
  {
    "id": "thoracic-rotation",
    "nameEn": "Thoracic Spine Rotation",
    "nameRu": "Ротация грудного отдела позвоночника",
    "category": "Mobility",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Beginner",
    "pattern": "coreRotation",
    "targetMuscles": [
      "Thoracic Spine",
      "Shoulders"
    ],
    "secondaryMuscles": [
      "Shoulders"
    ],
    "purpose": "Improves rotation through the upper back, directly supporting the trunk rotation used in punching, throwing, and swinging movements.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "On all fours, one hand behind the head with the elbow pointing down toward the opposite hand.",
    "steps": [
      "Rotate the upper back to bring the elbow up toward the ceiling.",
      "Follow the movement with your eyes.",
      "Return under control to the starting position."
    ],
    "bodyPosition": "Hips stay still and square; the rotation isolates the upper back only.",
    "rangeOfMotion": "Upper back rotates while the hips stay fixed and square.",
    "breathing": {
      "inhale": "Inhale rotating open.",
      "exhale": "Exhale returning down."
    },
    "mistakes": [
      "Letting the hips rotate along with the shoulders",
      "Rushing instead of moving slowly through the range"
    ],
    "safetyNotes": "Keep the rotation isolated to the upper back — if the lower back or hips start rotating too, reduce the range.",
    "sets": 2,
    "reps": "10 per side",
    "restSec": 20,
    "alternative": "cat-cow-stretch"
  },
  {
    "id": "pigeon-pose",
    "nameEn": "Pigeon Pose",
    "nameRu": "Поза голубя",
    "category": "Mobility",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "stretchMobility",
    "targetMuscles": [
      "Hips",
      "Glutes"
    ],
    "secondaryMuscles": [
      "Glutes"
    ],
    "purpose": "A deep hip-opening stretch that improves hip mobility for squatting depth and the range of motion needed for kicks.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Front shin angled across the body on the floor, back leg extended straight behind.",
    "steps": [
      "Square the hips as much as possible toward the front.",
      "Lean forward gently over the front leg to deepen the stretch.",
      "Hold, breathing steadily, then switch sides."
    ],
    "bodyPosition": "Avoid letting the back hip rotate open; keep it pointing down toward the floor.",
    "rangeOfMotion": "Front hip rotates into a deep external stretch with the back leg extended behind.",
    "breathing": {
      "inhale": "Breathe slowly throughout the hold.",
      "exhale": "Exhale to ease deeper into the stretch."
    },
    "mistakes": [
      "Forcing the front knee into pain rather than a mild stretch",
      "Letting the back hip rotate open"
    ],
    "safetyNotes": "Never force the front knee into pain to go deeper — hip and knee anatomy varies, and this stretch should stay mild-to-moderate.",
    "sets": 2,
    "reps": "30-45 sec per side",
    "restSec": 15,
    "alternative": "hip-flexor-stretch"
  },
  {
    "id": "ninety-ninety-hip-switch",
    "nameEn": "90/90 Hip Switch",
    "nameRu": "Смена бёдер 90/90",
    "category": "Mobility",
    "equipment": [
      "Bodyweight"
    ],
    "difficulty": "Intermediate",
    "pattern": "stretchMobility",
    "targetMuscles": [
      "Hips"
    ],
    "secondaryMuscles": [],
    "purpose": "Builds controlled hip rotation and mobility, improving movement quality for squats, lunges, and rotational athletic movements.",
    "recommendedRIR": "Train by technical quality and pace rather than RIR; stop early if form or power output drops",
    "startingPosition": "Seated on the floor, both knees bent at 90 degrees, one leg in front and one to the side.",
    "steps": [
      "Lift both knees slightly and rotate them to switch sides.",
      "Land softly with both knees still bent at roughly 90 degrees on the new side.",
      "Keep the torso tall throughout the switch."
    ],
    "bodyPosition": "Avoid using the hands to push off the floor; let the hips do the work.",
    "rangeOfMotion": "Both hips rotate together from 90/90 on one side to 90/90 on the other.",
    "breathing": {
      "inhale": "Inhale preparing to switch.",
      "exhale": "Exhale during the rotation."
    },
    "mistakes": [
      "Using the hands and arms to muscle through the switch",
      "Letting the torso collapse forward"
    ],
    "safetyNotes": "Move slowly and use the hips, not the hands pushing off the floor, to control the switch.",
    "sets": 2,
    "reps": "8 per side",
    "restSec": 20,
    "alternative": "pigeon-pose"
  }
]

export function getExerciseById(id) {
  return EXERCISES.find((e) => e.id === id) || null
}

export function getExercisesByCategory(category) {
  return EXERCISES.filter((e) => e.category === category)
}
