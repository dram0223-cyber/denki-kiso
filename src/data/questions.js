const questions = [
  {
    "id": 1,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "8秒間に42Cの電気量が移動したときに流れる電流I[A]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 5.25A",
    "tags": [
      "第1章直流回路",
      "1-1電気回路"
    ],
    "numeric_answer": 5.25,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.105,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 2,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "電線に9Aの電流が3秒間流れたとき、その電線の断面を移動した電子の個数を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 1.69e+20 個",
    "tags": [
      "第1章直流回路",
      "1-1電気回路"
    ],
    "numeric_answer": 1.69e+20,
    "numeric_unit": "個",
    "numeric_tolerance_abs": 3.38e+18,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 3,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "17μAの電流がｔ秒間流れた。このとき44μCの電気量が移動した。何秒間流れたか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2.59秒間",
    "tags": [
      "第1章直流回路",
      "1-1電気回路"
    ],
    "numeric_answer": 2.59,
    "numeric_unit": "秒間",
    "numeric_tolerance_abs": 0.0518,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 4,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "15分間に6Aの電流を流したとき、いくらの電気量が移動したか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 5.4kC",
    "tags": [
      "第1章直流回路",
      "1-1電気回路"
    ],
    "numeric_answer": 5.4,
    "numeric_unit": "kC",
    "numeric_tolerance_abs": 0.10800000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 5,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "下図の回路において67Ωの抵抗に283Vの電圧を加えると、何[A]の電流が流れるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 4.22A",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 4.22,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.0844,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-2オムの法則_1.png"
  },
  {
    "id": 6,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "上図の回路において、抵抗Rが12Ωのとき、4Aの電流が流れた。電源電圧[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 48V",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 48.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 0.96,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-2オムの法則_1.png"
  },
  {
    "id": 7,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "上図の回路において、抵抗Rに133Vの電圧を加えたとき、12Aの電流が流れた。抵抗R[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 11.1Ω",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 11.1,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.222,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-2オムの法則_1.png"
  },
  {
    "id": 8,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "ある抵抗に119Vの電圧を加えたとき、10Aの電流が流れた。この抵抗に128Vの電圧を加えたときの電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 10.8A",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 10.8,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.21600000000000003,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-2オムの法則_1.png"
  },
  {
    "id": 9,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "7MΩの抵抗に98ｍAの電流が流れている。この抵抗の両端に生じる電圧降下は何[V]か。また、何[ｋV]か",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 686000V",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 686000.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 13720.0,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-2オムの法則_1.png"
  },
  {
    "id": 10,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "20Ωの抵抗器2個を並列に接続した回路の合成抵抗R[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 10Ω",
    "tags": [
      "第1章直流回路",
      "1-4並列接続"
    ],
    "numeric_answer": 10.0,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.2,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-4並列接続_1.png"
  },
  {
    "id": 11,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "5Ωと10Ωと26Ωの抵抗器を並列に接続した回路の合成抵抗R[Ω]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2.95Ω",
    "tags": [
      "第1章直流回路",
      "1-4並列接続"
    ],
    "numeric_answer": 2.95,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.059000000000000004,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-4並列接続_1.png"
  },
  {
    "id": 12,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "下図の回路において、各抵抗に流れるI1[A],I2[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: I1=3.91A",
    "tags": [
      "第1章直流回路",
      "1-4並列接続"
    ],
    "numeric_answer": 1.0,
    "numeric_unit": "=3.91A",
    "numeric_tolerance_abs": 0.02,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-4並列接続_1.png"
  },
  {
    "id": 13,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "下図の回路において、I[A],I1[A],I2[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: I=5.44A",
    "tags": [
      "第1章直流回路",
      "1-4並列接続"
    ],
    "numeric_answer": 5.44,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.10880000000000001,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-4並列接続_2.png"
  },
  {
    "id": 14,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "下図の回路のa-b間の合成抵抗Rab[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 4.14Ω",
    "tags": [
      "第1章直流回路",
      "1-5応用1"
    ],
    "numeric_answer": 4.14,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.0828,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-5応用1_1.png"
  },
  {
    "id": 15,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "内部抵抗240kΩ、最大目盛20Vの電圧計がある。210kΩの抵抗を直列抵抗器として接続したとき、この電圧計で測定できる最大の値[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 37.5V",
    "tags": [
      "第1章直流回路",
      "1-5応用2"
    ],
    "numeric_answer": 37.5,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 0.75,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_1-5応用2_3.png"
  },
  {
    "id": 16,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "起電力E=1.7Vの電池に、10Aの電流を流したとき、端子電圧はV=1.5Vであった。電池の内部抵抗ｒ[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.02Ω",
    "tags": [
      "第1章直流回路",
      "1-6電池の接続"
    ],
    "numeric_answer": 0.02,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.0004,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 17,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "内部抵抗0.2Ω、起電力1.6Vの電池を、12個直列に接続した場合、全体の内部抵抗ｒ[Ω]および全体の起電力E[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: r= 2.4Ω",
    "tags": [
      "第1章直流回路",
      "1-6電池の接続"
    ],
    "numeric_answer": 2.4,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.048,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 18,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "起電力1.9Vの電池5個を直列に接続したものに、抵抗2.3Ωを繋ぐと端子電圧が7.5Vになる。端子間を短絡したときの電流I[A]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 15.5A",
    "tags": [
      "第1章直流回路",
      "1-6電池の接続"
    ],
    "numeric_answer": 15.5,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.31,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 19,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "内部抵抗1Ω、起電力1.2Vの電池を5個並列に接続し、これに19.5Ωの抵抗を直列に接続した。各電池に流れる電流I[ｍA]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 12.2mA 6V",
    "tags": [
      "第1章直流回路",
      "1-6電池の接続"
    ],
    "numeric_answer": 12.2,
    "numeric_unit": "mA 6V",
    "numeric_tolerance_abs": 0.244,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 20,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "内部抵抗0.7Ω、起電力6Vの電池を5個、並列に接続した場合、全体の内部抵抗ｒ[Ω]および全体の起電力E[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.14Ω",
    "tags": [
      "第1章直流回路",
      "1-6電池の接続"
    ],
    "numeric_answer": 0.14,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.0028000000000000004,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 21,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "13Ωの抵抗に9Aの電流を27分間流した。このとき発生する熱エネルギーは何[kJ]か。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 1710kJ",
    "tags": [
      "第1章直流回路",
      "2-1電流の発熱作用"
    ],
    "numeric_answer": 1710.0,
    "numeric_unit": "kJ",
    "numeric_tolerance_abs": 34.2,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 22,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "13Ωの抵抗に17Vの電圧を1時間通電した場合、発生する熱エネルギーは何[kJ]か。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 80kJ",
    "tags": [
      "第1章直流回路",
      "2-1電流の発熱作用"
    ],
    "numeric_answer": 80.0,
    "numeric_unit": "kJ",
    "numeric_tolerance_abs": 1.6,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 23,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "134Ωの抵抗に1Aの電流を12分間流したとき、発生する熱エネルギーで7℃の水5kgを加熱すると、水の温度は何度になるか。ただし、発生した熱量がすべて水の温度上昇に使われるものとする。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 11.6℃",
    "tags": [
      "第1章直流回路",
      "2-1電流の発熱作用"
    ],
    "numeric_answer": 11.6,
    "numeric_unit": "℃",
    "numeric_tolerance_abs": 0.23199999999999998,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 24,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "141Vの電源に接続された抵抗器がある。電流を測定すると、12Aであった。このとき、抵抗R[Ω]及び抵抗器に供給されている電力P[W]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: R= 11.8Ω",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 11.8,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.23600000000000002,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_2-1電力と電力量_1.png"
  },
  {
    "id": 25,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "ある電熱線に130Vの電圧が加わり、4Aの電流が流れている。1時間20分使用すると、その間に消費される電力量Wは何キロジュールか。また、何キロワット時か。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: Q= 2500kJ",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 2500.0,
    "numeric_unit": "kJ",
    "numeric_tolerance_abs": 50.0,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_2-1電力と電力量_1.png"
  },
  {
    "id": 26,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "12Ωの抵抗があって、その許容電力は27kWであるという。許容電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 47.4A",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 47.4,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.948,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_2-1電力と電力量_1.png"
  },
  {
    "id": 27,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "下図の回路に5.23Aの電流が流れている。抵抗Rで消費される電力P[W]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 118W",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 118.0,
    "numeric_unit": "W",
    "numeric_tolerance_abs": 2.36,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_2-1電力と電力量_1.png"
  },
  {
    "id": 28,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "直径1.3mm、長さ61mの銅線と同じ抵抗値にするには、直径2.3mmの銅線では、何メートルにすればよいか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 191m",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 191.0,
    "numeric_unit": "m",
    "numeric_tolerance_abs": 3.8200000000000003,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_3-1抵抗率と導電率_1.png"
  },
  {
    "id": 29,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "ある電線の断面積を１／6倍にし、長さを4倍にすると、この電線の抵抗はもとの値の何倍になるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 24倍",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 24.0,
    "numeric_unit": "倍",
    "numeric_tolerance_abs": 0.48,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_3-1抵抗率と導電率_1.png"
  },
  {
    "id": 30,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "ある電線の直径を4倍にし、長さを5倍にすると、この電線の抵抗はもとの値の何倍になるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.313倍",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 0.313,
    "numeric_unit": "倍",
    "numeric_tolerance_abs": 0.00626,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_3-1抵抗率と導電率_1.png"
  },
  {
    "id": 31,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "20℃で抵抗が5Ωの金線がある。92℃のときの抵抗R[Ω]を求めよ。ただし、抵抗温度係数は下の表の値を用いること。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 6.22Ω",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 6.22,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.1244,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_3-1抵抗率と導電率_1.png"
  },
  {
    "id": 32,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "硫酸銅溶液5Aの電流を23分間流した。銅の析出量w[g]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2.27g",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 2.27,
    "numeric_unit": "g",
    "numeric_tolerance_abs": 0.0454,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_4-1電流の化学作用_1.png"
  },
  {
    "id": 33,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "電気分解により、銅を精製する装置がある。この装置を使用して、純銅7kgを得るには、180Aの直流を何時間何分何秒流す必要があるか。また、原子量とイオンの価数は上の表を使うこと。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 32時間49分57秒",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 32.0,
    "numeric_unit": "時間49分57秒",
    "numeric_tolerance_abs": 0.64,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_4-1電流の化学作用_1.png"
  },
  {
    "id": 34,
    "category": "第1章 直流回路",
    "difficulty": 1,
    "text": "硝酸銀溶液から銀を48g析出するのに、必要な電気量Qは何クーロンか。また、これは何アンペア時にあたるか。また、原子量とイオンの価数は上の表を使うこと。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: Q= 42900C",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 42900.0,
    "numeric_unit": "C",
    "numeric_tolerance_abs": 858.0,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_4-1電流の化学作用_1.png"
  },
  {
    "id": 35,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "4.1A･hの二次電池から0.3Aの電流が流れだしている。何時間使用できるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 13.7h",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 13.7,
    "numeric_unit": "h",
    "numeric_tolerance_abs": 0.27399999999999997,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_4-1電流の化学作用_1.png"
  },
  {
    "id": 36,
    "category": "第1章 直流回路",
    "difficulty": 2,
    "text": "8Aの電流を17時間流すことができる鉛蓄電池の容量[A･h]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 136A･h",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 136.0,
    "numeric_unit": "A･h",
    "numeric_tolerance_abs": 2.72,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第1章直流回路_4-1電流の化学作用_1.png"
  },
  {
    "id": 37,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図に示すように、空気中で磁極の強さがm1=5E-05Wb、m2=5E-04Wb、両極間の距離r=18cmであるとき、両極間に働く力F[N]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.0488N",
    "tags": [
      "第2章電流と磁気",
      "1-1磁石と磁気"
    ],
    "numeric_answer": 0.0488,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 0.0009760000000000001,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_1-1磁石と磁気_1.png"
  },
  {
    "id": 38,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "空気中で二つの磁極の強さが7E-06Wb、-7E-06Wb、両極間の距離が1.2mであるとき、磁極間に働く力F[N]を求めよ。また、その力は反発力か吸引力か。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: -2.15395833333e-06 N",
    "tags": [
      "第2章電流と磁気",
      "1-1磁石と磁気"
    ],
    "numeric_answer": -2.15395833333e-06,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_1-1磁石と磁気_1.png"
  },
  {
    "id": 39,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "空気中で二つの磁極の強さが1.3E-04Wb、4.3E-05Wbであり、そのとき両極間に働く力は0.755Nであった。磁極間の距離r[cm]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2.16cm",
    "tags": [
      "第2章電流と磁気",
      "1-1磁石と磁気"
    ],
    "numeric_answer": 2.16,
    "numeric_unit": "cm",
    "numeric_tolerance_abs": 0.0432,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_1-1磁石と磁気_1.png"
  },
  {
    "id": 40,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図のように、空気中で10E-06Wbの磁極から18cm離れた点Pの磁界の大きさH[A/m]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 19.5A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ１"
    ],
    "numeric_answer": 19.5,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 0.39,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_1-3磁界の強さ_1.png"
  },
  {
    "id": 41,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "空気中で、m=8E-06Wbの磁極から19cm離れた点の磁界の大きさH[A/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 14A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ１"
    ],
    "numeric_answer": 14.0,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 0.28,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_1-3磁界の強さ_1.png"
  },
  {
    "id": 42,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "磁界の大きさが2A/mの磁界中に、9E-03Wbの磁極を置いたとき、この磁極に働く力F[N]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.018 N",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ１"
    ],
    "numeric_answer": 0.018,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 0.00035999999999999997,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_1-3磁界の強さ_1.png"
  },
  {
    "id": 43,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "円形コイルの半径ｒが0.8m、電流Iが1.3A、コイルの巻数Nが18であるとき、コイルの中心の磁界の大きさH[A/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 14.6A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ２"
    ],
    "numeric_answer": 14.6,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 0.292,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 44,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "円形コイルの直径が2cm、コイルの巻数が160のとき、コイルの中心の磁界の大きさが1.8A/mであった。コイルに流れる電流は何ミリアンペアか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.225mA",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ２"
    ],
    "numeric_answer": 0.225,
    "numeric_unit": "mA",
    "numeric_tolerance_abs": 0.0045000000000000005,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 45,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "10Aの電流が流れている直線状導体がある。導体から4cmおよび24cm離れた点の磁界の大きさH1[A/m], H2[A/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: H1= 39.8A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ２"
    ],
    "numeric_answer": 1.0,
    "numeric_unit": "= 39.8A/m",
    "numeric_tolerance_abs": 0.02,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 46,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "直線状導体から6cm離れた点の磁界の大きさが62A/mであった。直線状導体に流れている電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 23.4A",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ２"
    ],
    "numeric_answer": 23.4,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.46799999999999997,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 47,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "1ｍあたり巻数480回の無限に長いソレノイドに9Aの電流を流したときの、ソレノイド内部に発生する磁界の大きさH[A/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 4320A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ３"
    ],
    "numeric_answer": 4320.0,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 86.4,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 48,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "4cmあたり巻数72回の無限に長いソレノイドに電流を流したとき、ソレノイド内部に発生する磁界の大きさが28A/mであった。流れている電流I[mA]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 15.6mA",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ３"
    ],
    "numeric_answer": 15.6,
    "numeric_unit": "mA",
    "numeric_tolerance_abs": 0.312,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 49,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "巻数54、平均の長さ2.7mの環状コイルに9Aの電流を流した。環状コイルの内部に生じる磁界の大きさH[A/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 180A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ３"
    ],
    "numeric_answer": 180.0,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 3.6,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 50,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "平均の長さ3.1mの環状コイルに4Aの電流を流したとき、環状コイルの内部に大きさ520A/mの磁界が生じた。コイルの巻数Nを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 403回",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ３"
    ],
    "numeric_answer": 403.0,
    "numeric_unit": "回",
    "numeric_tolerance_abs": 8.06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 51,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図で、磁束密度B=8T、電流I=10A、磁界中の導体の長さl=0.6m、磁界の向きが電流の向きに対してθ=65°の角度をなすとき、導体に働く力の大きさF[N]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 43.5N 90°のとき 40.6N",
    "tags": [
      "第2章電流と磁気",
      "2-1電磁力"
    ],
    "numeric_answer": 43.5,
    "numeric_unit": "N 90°のとき 40.6N",
    "numeric_tolerance_abs": 0.87,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-1電磁力_1.png"
  },
  {
    "id": 52,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "上図において、電流I=9A、磁界中の導体の長さl=5.2cm、θ=30°のとき、導体に1.74Nの力が生じた。磁束密度B[T]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 7.44T",
    "tags": [
      "第2章電流と磁気",
      "2-1電磁力"
    ],
    "numeric_answer": 7.44,
    "numeric_unit": "T",
    "numeric_tolerance_abs": 0.14880000000000002,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-1電磁力_1.png"
  },
  {
    "id": 53,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "巻数N=630、面積A=0.003m^2のコイルがある。このコイルを磁束密度B=0.8Tの磁界に水平に置き、コイルに電流540mAを流した。コイルに働くトルクT[N･m]を求めよ。また、電流Iを260mAに減少させると、トルクTはもとの何倍になるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.816N･m",
    "tags": [
      "第2章電流と磁気",
      "2-2方形コイルに働くトルク"
    ],
    "numeric_answer": 0.816,
    "numeric_unit": "N･m",
    "numeric_tolerance_abs": 0.016319999999999998,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-2方形コイルに働くトルク_1.png"
  },
  {
    "id": 54,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図で磁束密度B=1T、電流I=12A、コイルの面積0.1m^2、巻数N=440、磁界の向きに対してコイルの面がなす角が14°のとき、コイルに働くトルクT[N･m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 512N･m",
    "tags": [
      "第2章電流と磁気",
      "2-2方形コイルに働くトルク"
    ],
    "numeric_answer": 512.0,
    "numeric_unit": "N･m",
    "numeric_tolerance_abs": 10.24,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-2方形コイルに働くトルク_1.png"
  },
  {
    "id": 55,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図で磁束密度B=2T、電流I=6A、コイルの面積0.7m^2、磁界の向きに対してコイルの面がなす角が50°のとき、コイルに働くトルクTが431N･mであった。コイルの巻数Nを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 79.8回",
    "tags": [
      "第2章電流と磁気",
      "2-2方形コイルに働くトルク"
    ],
    "numeric_answer": 79.8,
    "numeric_unit": "回",
    "numeric_tolerance_abs": 1.596,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-2方形コイルに働くトルク_1.png"
  },
  {
    "id": 56,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図の導体①、②に流れる電流はどちらも0.3Aであり、①、②の間隔は2mmであるとする。導体1mあたりに働く力の大きさf[N/m]と、導体1cmあたりに働く力の大きさf'[N/cm]をそれぞれ求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: f= 9e-06 N/m",
    "tags": [
      "第2章電流と磁気",
      "2-3平行な直線状導体間に働く力"
    ],
    "numeric_answer": 9e-06,
    "numeric_unit": "N/m",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-3平行な直線状導体間に働く力_1.png"
  },
  {
    "id": 57,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図のような、長さ1mの平行電線に13Aの電流が流れており、電線の間隔が9mmであるとする。電線に働く力の大きさf[N]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.00375555555556 N",
    "tags": [
      "第2章電流と磁気",
      "2-3平行な直線状導体間に働く力"
    ],
    "numeric_answer": 0.00375555555556,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 7.51111111112e-05,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-3平行な直線状導体間に働く力_2.png"
  },
  {
    "id": 58,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "2本の導体が、間隔3mmで、平行におかれている。それぞれに電流0.7Aを同じ向きに流した。導体39cmあたりに働く力の大きさf[N]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 1.274e-05 N",
    "tags": [
      "第2章電流と磁気",
      "2-3平行な直線状導体間に働く力"
    ],
    "numeric_answer": 1.274e-05,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_2-3平行な直線状導体間に働く力_2.png"
  },
  {
    "id": 59,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "磁路の長さl=1.2m、磁路の断面積A=0.03m^2、鉄心の透磁率μ=14E-03H/mであるとき、この回路の磁気抵抗Rm[H^-1]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2860H^-1",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路1"
    ],
    "numeric_answer": 2860.0,
    "numeric_unit": "H^-1",
    "numeric_tolerance_abs": 57.2,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 60,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "巻数1110のコイルに、電流0.6Aを流すときの起磁力NI[A]を求めよ。また、巻数16のコイルで、これと同じ起磁力を生じさせるには、何アンペアの電流を流せばよいか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: NI= 666A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路1"
    ],
    "numeric_answer": 666.0,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 13.32,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 61,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "磁路の長さl=2m、鉄心の断面積A=39cm^2、コイルの巻数N=2200、磁束Φ=5E-03Wb、磁気抵抗Rm=4E+06H^-1の磁気回路がある。鉄心の透磁率μ[H/m]を求めよ。また、回路に流れる電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: μ= 0.000128205128205 H/m",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路1"
    ],
    "numeric_answer": 0.000128205128205,
    "numeric_unit": "H/m",
    "numeric_tolerance_abs": 2.5641025641e-06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 62,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "コイルの巻数が180、磁気抵抗が7E+04H^-1の磁気回路に、3E-02Wbの磁束を通すために必要な電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 11.7A ② NI= 15200 A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路2"
    ],
    "numeric_answer": 11.7,
    "numeric_unit": "A ② NI= 15200 A",
    "numeric_tolerance_abs": 0.23399999999999999,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_3-1環状鉄心の磁気回路2_1.png"
  },
  {
    "id": 63,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図においてコイルの巻数5900、磁路の長さ2.8m、比透磁率530、磁路の断面積3E-04m^2、磁束3.8E-06Wbのときの電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.00902573603293 A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路3"
    ],
    "numeric_answer": 0.00902573603293,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.00018051472065860002,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_3-1環状鉄心の磁気回路3_1.png"
  },
  {
    "id": 64,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図において、磁路の長さ1.4m、コイルの巻数15000、電流9Aのとき、磁界の大きさH[A/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 96400A/m",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路3"
    ],
    "numeric_answer": 96400.0,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 1928.0,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_3-1環状鉄心の磁気回路3_1.png"
  },
  {
    "id": 65,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図に示す磁気回路について、次の各問いに答えよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: ① Rm1= 319000 H-1 ③ B= 1.39T",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路4"
    ],
    "numeric_answer": 1.0,
    "numeric_unit": "= 319000 H-1 ③ B= 1.39T",
    "numeric_tolerance_abs": 0.02,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_3-1環状鉄心の磁気回路4_1.png"
  },
  {
    "id": 66,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図において、エアギャップの長さを8mm、鉄心の長さを1.1m、使用する鉄心を比透磁率290の鋳鉄とし、磁束密度を0.9Tにしたい。コイルの巻数が1400であれば、何アンペアの電流を流せばよいか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 6.03A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路4"
    ],
    "numeric_answer": 6.03,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.12060000000000001,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_3-1環状鉄心の磁気回路4_1.png"
  },
  {
    "id": 67,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図において、コイルの巻数が490であるとする。コイルを貫く磁束が、2msの間に1E-03Wbだけ増加すると、この2msの間に磁束鎖交数[Wb]はどれだけ変化するか。また、このときコイルに発生する誘導起電力e[V]の大きさを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 鎖交数= 0.49Wb",
    "tags": [
      "第2章電流と磁気",
      "4-1電磁誘導"
    ],
    "numeric_answer": 0.49,
    "numeric_unit": "Wb",
    "numeric_tolerance_abs": 0.0098,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-1電磁誘導_1.png"
  },
  {
    "id": 68,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図のように、磁束密度0.1Tの平等磁界中に長さ77cmの導体を置き、これを速度85cm/sで動かしたとき、導体に発生する誘導起電力の大きさｅ[ｍV]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 65.5mV",
    "tags": [
      "第2章電流と磁気",
      "4-1電磁誘導"
    ],
    "numeric_answer": 65.5,
    "numeric_unit": "mV",
    "numeric_tolerance_abs": 1.31,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-1電磁誘導_2.png"
  },
  {
    "id": 69,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図のように、磁束密度0.7Tの平等磁界中に長さ12cmの導体を置き、これを磁界に対してなす角が74°の向きに速度47cm/sで動かした。このとき導体に発生する誘導起電力の大きさｅ[mV]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 38mV",
    "tags": [
      "第2章電流と磁気",
      "4-1電磁誘導"
    ],
    "numeric_answer": 38.0,
    "numeric_unit": "mV",
    "numeric_tolerance_abs": 0.76,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-1電磁誘導_3.png"
  },
  {
    "id": 70,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "上図において、磁界に対してなす角度を30°としたとき、導体に発生する誘導起電力が1Vになった。このときの磁束密度B[T]を求めよ。ただし、導体の長さと動かす速度は変わらないものとする。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 35.5T",
    "tags": [
      "第2章電流と磁気",
      "4-1電磁誘導"
    ],
    "numeric_answer": 35.5,
    "numeric_unit": "T",
    "numeric_tolerance_abs": 0.71,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-1電磁誘導_3.png"
  },
  {
    "id": 71,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "コイルに流れる電流が、8msの間に0.4A変化するとき、4Vの誘導起電力が生じるとして、自己インダクタンスL[mH]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 80mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス1"
    ],
    "numeric_answer": 80.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 1.6,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 72,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "自己インダクタンス0.2Hのコイルに流れる電流が、0.4msの間に0.7A変化した。コイルに発生する誘導起電力の大きさｅ[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 350V",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス1"
    ],
    "numeric_answer": 350.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 7.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 73,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "あるコイルに流れる電流が、0.2msの間に2A変化したとき、27Vの誘導起電力が生じた。自己インダクタンスL[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2.7mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス1"
    ],
    "numeric_answer": 2.7,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.054000000000000006,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 74,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図の磁気回路で、磁路の断面積A=3E-04m^2、磁路の長さl=0.8m、コイルの巻数N=1100、比透磁率μr=940とすると、自己インダクタンスL[H]はいくらになるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.536H",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 0.536,
    "numeric_unit": "H",
    "numeric_tolerance_abs": 0.01072,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス2_1.png"
  },
  {
    "id": 75,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "環状鉄心に巻いたコイルの巻数が820のとき、自己インダクタンスLは3mHである。このコイルの巻数が1230のとき、自己インダクタンスL[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 6.75mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 6.75,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.135,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス2_1.png"
  },
  {
    "id": 76,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図で、磁路の断面積A=1E-04m^2、磁路の長さl=0.5m、コイルの巻数N=250、比透磁率μr=370であるとき、自己インダクタンスL[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 5.81mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 5.81,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.1162,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス2_1.png"
  },
  {
    "id": 77,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "上図で、磁路の断面積が8E-04m^2、磁路の長さが0.4m、コイルの巻数が1860のとき、自己インダクタンスが4Hである。磁気回路の比透磁率μrを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 460",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 460.0,
    "numeric_unit": "",
    "numeric_tolerance_abs": 9.200000000000001,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス2_1.png"
  },
  {
    "id": 78,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図で、一次コイルの電流I1が、0.1msの間に0.1A変化したとき、二次コイルに誘導起電力9V発生したという。相互インダクタンスM[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 9mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 9.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.18,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス3_1.png"
  },
  {
    "id": 79,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図で、相互インダクタンスMが128mHであるという。一次コイルの電流I1が,14msの間に8A変化したとき、二次コイルに発生する誘導起電力の大きさe[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 73.1V",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 73.1,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 1.462,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス3_1.png"
  },
  {
    "id": 80,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図で、一次コイル、二次コイルの巻数をN1=1030、N2=2050、比透磁率μr=544、磁路の断面積A=6E-03m^2、磁路の長さl=0.4mとしたときの相互インダクタンスM[H]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 21.7H",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 21.7,
    "numeric_unit": "H",
    "numeric_tolerance_abs": 0.434,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス3_1.png"
  },
  {
    "id": 81,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "上図で、一次コイル、二次コイルの巻数がそれぞれ、91,207のとき、相互インダクタンスが110mHであった。コイルの巻数がそれぞれ156,247のときの相互インダクタンスM[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 225mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 225.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 4.5,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス3_1.png"
  },
  {
    "id": 82,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図で、一次コイルの自己インダクタンスL1=5mH、二次コイルの自己インダクタンスL2=11mHであるという。相互インダクタンスM[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 7.42mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス4"
    ],
    "numeric_answer": 7.42,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.1484,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス4_1.png"
  },
  {
    "id": 83,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "上図で、一次コイルの巻数N1=720,二次コイルの巻数N2=1790,一次コイルの自己インダクタンスL1=216mHであるという。二次コイルの自己インダクタンスL2[mH]および相互インダクタンスM[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: L2= 1340mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス4"
    ],
    "numeric_answer": 2.0,
    "numeric_unit": "= 1340mH",
    "numeric_tolerance_abs": 0.04,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス4_1.png"
  },
  {
    "id": 84,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図において、一次コイル、二次コイルの自己インダクタンスがL1=45mH、L2=210mH、結合係数ｋが0.6のときの相互インダクタンスM[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 58.3mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス4"
    ],
    "numeric_answer": 58.3,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 1.166,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス4_2.png"
  },
  {
    "id": 85,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "上図において、一次コイル、二次コイルの自己インダクタンスがL1=9μH、L2=71μH、相互インダクタンスM=18μHであるという。結合係数kを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.712",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス4"
    ],
    "numeric_answer": 0.712,
    "numeric_unit": "",
    "numeric_tolerance_abs": 0.01424,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス4_2.png"
  },
  {
    "id": 86,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図において、一次コイルの自己インダクタンスL1=20mH、二次コイルの自己インダクタンスL2=43mH、相互インダクタンスM=7mHである。端子①－④間の合成自己インダクタンスL[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 77mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス5"
    ],
    "numeric_answer": 77.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 1.54,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス5_1.png"
  },
  {
    "id": 87,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "二つのコイルが差動接続されている。自己インダクタンスL1=13mH、自己インダクタンスL2=10mH、相互インダクタンスM=3mHのときの全体の自己インダクタンスL[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 17mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス5"
    ],
    "numeric_answer": 17.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.34,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス5_1.png"
  },
  {
    "id": 88,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "二つのコイルが和動接続されている。自己インダクタンスL1=14mH、L2=10mHのとき、全体の自己インダクタンスLが130mHであった。相互インダクタンスM[mH]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 53mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス5"
    ],
    "numeric_answer": 53.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 1.06,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-2インダクタンス5_1.png"
  },
  {
    "id": 89,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "自己インダクタンス8Hのコイルに、110mAの電流が流れている。このコイルに蓄えられる電磁エネルギーW[J]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.0484J",
    "tags": [
      "第2章電流と磁気",
      "4-3電磁エネルギー"
    ],
    "numeric_answer": 0.0484,
    "numeric_unit": "J",
    "numeric_tolerance_abs": 0.000968,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-3電磁エネルギ_2.png"
  },
  {
    "id": 90,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "インダクタンス200mHのコイルに66.7Jのエネルギーを蓄えたい。コイルに流す電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 25.8A",
    "tags": [
      "第2章電流と磁気",
      "4-3電磁エネルギー"
    ],
    "numeric_answer": 25.8,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.516,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-3電磁エネルギ_2.png"
  },
  {
    "id": 91,
    "category": "第2章 電流と磁気",
    "difficulty": 1,
    "text": "下図の磁気回路において、磁束密度B=0.4T、磁路の断面積A=3E-04m^2、磁路の長さl=0.3m、比透磁率μr=300である。この磁気回路全体に蓄えられる電磁エネルギーW[mJ]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 19.1mJ",
    "tags": [
      "第2章電流と磁気",
      "4-3電磁エネルギー"
    ],
    "numeric_answer": 19.1,
    "numeric_unit": "mJ",
    "numeric_tolerance_abs": 0.38200000000000006,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-3電磁エネルギ_2.png"
  },
  {
    "id": 92,
    "category": "第2章 電流と磁気",
    "difficulty": 2,
    "text": "下図の磁気回路で、磁界の大きさHが690A/m、比透磁率μrが460の場合、1m^3あたりの磁界に蓄えられている電磁エネルギーω[J/m^3]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 138J/m^3",
    "tags": [
      "第2章電流と磁気",
      "4-3電磁エネルギー"
    ],
    "numeric_answer": 138.0,
    "numeric_unit": "J/m^3",
    "numeric_tolerance_abs": 2.7600000000000002,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第2章電流と磁気_4-3電磁エネルギ_1.png"
  },
  {
    "id": 93,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "真空中に5μCと3μCの正の電荷が40cm離れて置かれている。このとき、両電荷間に働く静電力の大きさF[N]を求めよ。また、その力は反発力か吸引力か。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.844N",
    "tags": [
      "第3章静電気",
      "1-1静電現象のあらまし"
    ],
    "numeric_answer": 0.844,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 0.01688,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 94,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "真空中において、Q1=9E-06CとQ2=-19E-06Cの点電荷が5cmの距離にある。これらの間に働く静電力の大きさF[N]を求めよ。また、その力は反発力か吸引力か。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: -616N",
    "tags": [
      "第3章静電気",
      "1-1静電現象のあらまし"
    ],
    "numeric_answer": -616.0,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 12.32,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 95,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "空気中において、ある正電荷と3×E-06Cの電荷が11cm離れて置かれているとき、電荷間に3.6Nの反発力が働いた。正電荷の大きさ[μC]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 1.61μC",
    "tags": [
      "第3章静電気",
      "1-1静電現象のあらまし"
    ],
    "numeric_answer": 1.61,
    "numeric_unit": "μC",
    "numeric_tolerance_abs": 0.0322,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 96,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "空気中に置かれた5μCの電荷から4cm離れた点の電界の大きさE[V/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 28125000 V/m",
    "tags": [
      "第3章静電気",
      "1-2電界と電界の強さ"
    ],
    "numeric_answer": 28125000.0,
    "numeric_unit": "V/m",
    "numeric_tolerance_abs": 562500.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 97,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "真空中において、ある点電荷から5cm離れた点の電界の大きさを求めたところ、3.3E+06V/mであった。この点電荷Q[μC]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.917μC",
    "tags": [
      "第3章静電気",
      "1-2電界と電界の強さ"
    ],
    "numeric_answer": 0.917,
    "numeric_unit": "μC",
    "numeric_tolerance_abs": 0.018340000000000002,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 98,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "空気中において、5μCの電荷に0.2Nの静電力が働く点の電界の大きさE[V/m]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 40000 V/m",
    "tags": [
      "第3章静電気",
      "1-2電界と電界の強さ"
    ],
    "numeric_answer": 40000.0,
    "numeric_unit": "V/m",
    "numeric_tolerance_abs": 800.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 99,
    "category": "第3章 静電気",
    "difficulty": 2,
    "text": "2枚の平行金属板間の距離を9cm、電界の大きさを300V/mとしたとき、この両板間の電位差V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 27V",
    "tags": [
      "第3章静電気",
      "1-2電界と電界の強さ"
    ],
    "numeric_answer": 27.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 0.54,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 100,
    "category": "第3章 静電気",
    "difficulty": 2,
    "text": "誘電率ε=0.14μF/mの物質中に点電荷を置いたとき、ある点の電界の大きさが28V/mとなった。この点の電束密度D[μC/m^2]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 3.92μC/m^2",
    "tags": [
      "第3章静電気",
      "1-2電界と電界の強さ"
    ],
    "numeric_answer": 3.92,
    "numeric_unit": "μC/m^2",
    "numeric_tolerance_abs": 0.0784,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 101,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "空気中にある点電荷から2m離れた点の電位が13kVであった。この点電荷Q[μC]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2.89μC",
    "tags": [
      "第3章静電気",
      "1-3電位と静電容量"
    ],
    "numeric_answer": 2.89,
    "numeric_unit": "μC",
    "numeric_tolerance_abs": 0.057800000000000004,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第3章静電気_1-3電位と静電容量_1.png"
  },
  {
    "id": 102,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "下図において、点電荷Q=6μCから、点Aまでの距離が40cm、AB間の電位差VABが30kVであったとき、点Bまでの距離r2[cm]を求めよ。ただし、点電荷は空気中にあるものとする。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 51.4cm",
    "tags": [
      "第3章静電気",
      "1-3電位と静電容量"
    ],
    "numeric_answer": 51.4,
    "numeric_unit": "cm",
    "numeric_tolerance_abs": 1.028,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第3章静電気_1-3電位と静電容量_1.png"
  },
  {
    "id": 103,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "海王星の半径は約25000kmである。海王星を導体とみなすときその静電容量C[μF]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 2780μF",
    "tags": [
      "第3章静電気",
      "1-3電位と静電容量"
    ],
    "numeric_answer": 2780.0,
    "numeric_unit": "μF",
    "numeric_tolerance_abs": 55.6,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第3章静電気_1-3電位と静電容量_1.png"
  },
  {
    "id": 104,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "面積26cm^2の2枚の金属板を、空気中で4.8mm離して平行に置いたときの静電容量C[pF]はいくらか。また、このコンデンサに電圧21Vを加えたとき、蓄えられる電荷Q[pC]はいくらか。ただし、ε0=8.85E-12F/mとする。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: C= 4.79pF",
    "tags": [
      "第3章静電気",
      "2-1コンデンサの構造と静電容量"
    ],
    "numeric_answer": 4.79,
    "numeric_unit": "pF",
    "numeric_tolerance_abs": 0.0958,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 105,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "半径12cmの円形金属板を空気中(ε0=8.85E-12F/m)に1cmの間隔で平行に置いたときの静電容量C[pF]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 40pF",
    "tags": [
      "第3章静電気",
      "2-1コンデンサの構造と静電容量"
    ],
    "numeric_answer": 40.0,
    "numeric_unit": "pF",
    "numeric_tolerance_abs": 0.8,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 106,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "平行板コンデンサの面積を6倍にし、さらに間隔を9/13倍にしたとき、静電容量はもとのコンデンサの何倍になるか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 8.67倍",
    "tags": [
      "第3章静電気",
      "2-1コンデンサの構造と静電容量"
    ],
    "numeric_answer": 8.67,
    "numeric_unit": "倍",
    "numeric_tolerance_abs": 0.1734,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 107,
    "category": "第3章 静電気",
    "difficulty": 2,
    "text": "誘電率が6.52E-11F/mの誘電体の比誘電率εrを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 7.37",
    "tags": [
      "第3章静電気",
      "2-1コンデンサの構造と静電容量"
    ],
    "numeric_answer": 7.37,
    "numeric_unit": "",
    "numeric_tolerance_abs": 0.1474,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 108,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "電圧320Vに充電された11μFのコンデンサC1と、まったく充電されていない4μFのコンデンサC2がある。これらのコンデンサを並列に接続したとき、コンデンサの端子電圧V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: V= 235V",
    "tags": [
      "第3章静電気",
      "2-2コンデンサの接続"
    ],
    "numeric_answer": 235.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 4.7,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第3章静電気_2-2コンデンサの接続_2.png"
  },
  {
    "id": 109,
    "category": "第3章 静電気",
    "difficulty": 1,
    "text": "上図において、V=5600V、l=30mm、ε=3.74E-11F/mのとき、誘電体の単位体積あたりにたくわえられるエネルギーω[J/m^3]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 0.652J/m^3 Q3= 840μC W= 25.2mJ",
    "tags": [
      "第3章静電気",
      "2-3誘電体内のエネルギー"
    ],
    "numeric_answer": 0.652,
    "numeric_unit": "J/m^3 Q3= 840μC W= 25.2mJ",
    "numeric_tolerance_abs": 0.013040000000000001,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第3章静電気_2-3誘電体内のエネルギ_1.png"
  },
  {
    "id": 110,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "下図において、磁束密度0.3T、コイルの回転軸方向の長さ25cm、コイルの運動速度130m/s、コイルの面が磁界に対してなす角度74°のとき、コイルに発生する起電力e[V]はいくらか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 18.7V ② 1000 GHz ④ 1e-06 ms",
    "tags": [
      "第4章交流回路",
      "1-1正弦波交流"
    ],
    "numeric_answer": 18.7,
    "numeric_unit": "V ② 1000 GHz ④ 1e-06 ms",
    "numeric_tolerance_abs": 0.374,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_1-1正弦波交流_1.png"
  },
  {
    "id": 111,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "周波数が105kHzのときの周期T[μs]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 9.52μS ③ 1000 ns ⑤ 1000 μs",
    "tags": [
      "第4章交流回路",
      "1-1正弦波交流"
    ],
    "numeric_answer": 9.52,
    "numeric_unit": "μS ③ 1000 ns ⑤ 1000 μs",
    "numeric_tolerance_abs": 0.19039999999999999,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_1-1正弦波交流_1.png"
  },
  {
    "id": 112,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "下図に示す交流起電力の周波数f[Hz]と角速度ω[rad/s]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 4Hz",
    "tags": [
      "第4章交流回路",
      "1-2角周波数"
    ],
    "numeric_answer": 4.0,
    "numeric_unit": "Hz",
    "numeric_tolerance_abs": 0.08,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 113,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "最大値120Vの正弦波交流起電力の平均値Ea[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 76.4V",
    "tags": [
      "第4章交流回路",
      "1-3交流の表し方"
    ],
    "numeric_answer": 76.4,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 1.5280000000000002,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 114,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "平均値110Vの正弦波交流起電力の最大値Em[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 173V 30Hzのとき e=110√2sin60πt [V] Vpp= 400V f= 15Hz",
    "tags": [
      "第4章交流回路",
      "1-3交流の表し方"
    ],
    "numeric_answer": 173.0,
    "numeric_unit": "V 30Hzのとき e=110√2sin60πt [V] Vpp= 400V f= 15Hz",
    "numeric_tolerance_abs": 3.46,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 115,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "実効値150Aの正弦波交流の最大値Im[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 212A Va= 127V T= 66.7ms",
    "tags": [
      "第4章交流回路",
      "1-3交流の表し方"
    ],
    "numeric_answer": 212.0,
    "numeric_unit": "A Va= 127V T= 66.7ms",
    "numeric_tolerance_abs": 4.24,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 116,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "実効値110V、周波数60Hzおよび30Hzのとき、正弦波交流起電力の瞬時値e[V]をそれぞれ式で表せ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 60Hzのとき e=110√2sin120πt [V]",
    "tags": [
      "第4章交流回路",
      "1-3交流の表し方"
    ],
    "numeric_answer": 60.0,
    "numeric_unit": "Hzのとき e=110√2sin120πt [V]",
    "numeric_tolerance_abs": 1.2,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 117,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "瞬時値e=200sin30πt(V)の交流起電力の最大値Em[V]、ピークピーク値Vpp[V]、平均値Va[V]、実効値E[V]、周波数f[Hz]、周期T[ms]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: Em= 200V E= 141V",
    "tags": [
      "第4章交流回路",
      "1-3交流の表し方"
    ],
    "numeric_answer": 200.0,
    "numeric_unit": "V E= 141V",
    "numeric_tolerance_abs": 4.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 118,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "e1=100√2sin(ωt-π/3)[V]とe2=50√2sin8(ωt＋π/9)[V]の正弦波交流起電力がある。 e1はe2に比べて、どれだけ位相が進んでいるか、または遅れているか。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: (4/9)π",
    "tags": [
      "第4章交流回路",
      "2-1位相差とベクトル"
    ],
    "numeric_answer": 4.0,
    "numeric_unit": "/9)π",
    "numeric_tolerance_abs": 0.08,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 119,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "実効値130V、周波数40Hz、位相がπ/5[rad]遅れている正弦交流起電力の瞬時値e[V]を式で表せ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: e=130√2sin(80πt-π/5）V",
    "tags": [
      "第4章交流回路",
      "2-1位相差とベクトル"
    ],
    "numeric_answer": 130.0,
    "numeric_unit": "√2sin(80πt-π/5）V",
    "numeric_tolerance_abs": 2.6,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 120,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "下図においてベクトルA=(3,10)、ベクトルB=(8，5)である。ベクトルAとベクトルBの和のベクトルCの座標を求めよ。また、ベクトルCを極座標表示で表せ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: C=(11,15)",
    "tags": [
      "第4章交流回路",
      "2-1位相差とベクトル"
    ],
    "numeric_answer": 1115.0,
    "numeric_unit": ")",
    "numeric_tolerance_abs": 22.3,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 121,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "電気コンロには抵抗線が入っている。周波数50Hz、150Vの電圧を加えると、9Aの電流が流れた。抵抗線の抵抗R[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 16.7Ω",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 16.7,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.334,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-2RLC単独の回路_1.png"
  },
  {
    "id": 122,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "下図においてインダクタンスLが4H、電流Iが4Aとすると、回路に加わっている電圧vの実効値V=100Vのときの角周波数ω[rad/s]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 6.25rad/s",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 6.25,
    "numeric_unit": "rad/s",
    "numeric_tolerance_abs": 0.125,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-2RLC単独の回路_1.png"
  },
  {
    "id": 123,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "上図のインダクタンスLが46mHのとき、周波数fが50Hzおよび60Hzの交流に対する誘導性リアクタンスXL[Ω]をそれぞれ求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 50Hzのとき 14.5Ω",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 50.0,
    "numeric_unit": "Hzのとき 14.5Ω",
    "numeric_tolerance_abs": 1.0,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-2RLC単独の回路_1.png"
  },
  {
    "id": 124,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "コンデンサの静電容量Cが21μFのとき、周波数fが50Hzおよび60Hzの交流に対する容量性リアクタンスXC[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 50Hzのとき 152Ω",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 50.0,
    "numeric_unit": "Hzのとき 152Ω",
    "numeric_tolerance_abs": 1.0,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-2RLC単独の回路_2.png"
  },
  {
    "id": 125,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "下図において、電圧300V、周波数60Hz、電流80mAであるという。容量性リアクタンスXC[kΩ]および静電容量C[μF]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 3.75kΩ",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 3.75,
    "numeric_unit": "kΩ",
    "numeric_tolerance_abs": 0.075,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-2RLC単独の回路_2.png"
  },
  {
    "id": 126,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "インピーダンスZ=64ΩのRL直列回路において、抵抗R＝13Ωであるときの誘導性リアクタンスXL[Ω]を求めよ。また、電流I=7Aのときの電圧V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: XL= 62.7Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路1"
    ],
    "numeric_answer": 62.7,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 1.254,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 127,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "RL直列回路に実効値410Vの電圧を加えたところ、15Aの電流が流れた。抵抗R[Ω]と誘導性リアクタンスXL[Ω]を求めよ。ただし、電圧と電流のインピーダンス角はπ/3[rad]とする。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: R= 13.7Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路1"
    ],
    "numeric_answer": 13.7,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.27399999999999997,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 128,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "抵抗16Ωと誘導性リアクタンス23Ωの直列回路のインピーダンズZ[Ω]およびインピーダンス角θ[rad]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: Z= 28Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路1"
    ],
    "numeric_answer": 28.0,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.56,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 129,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "抵抗23Ωと誘導性リアクタンス30Ωの直列回路に2Aの電流が流れたとき、この回路に加えた電圧V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 75.6V",
    "tags": [
      "第4章交流回路",
      "2-3直列回路1"
    ],
    "numeric_answer": 75.6,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 1.512,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 130,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "インピーダンスZ=13ΩのRC直列回路において、容量性リアクタンスXC=5Ωであるとき、抵抗R[Ω]を求めよ。また、電流I=6Aのときの電圧V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: R= 12Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路2"
    ],
    "numeric_answer": 12.0,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.24,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 131,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "周波数4kHz、130Vの交流電圧をRC直列回路に加えた。R=7Ω、C=13/π[μF]としたとき、容量性リアクタンスXC[Ω]、および回路のインピーダンスZ[Ω]と流れる電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: XC= 9.62Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路2"
    ],
    "numeric_answer": 9.62,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.1924,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 132,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "抵抗30Ωと容量性リアクタンス29Ωの直列回路のインピーダンスZ[Ω]およびインピーダンス角θ[rad]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: Z= 41.7Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路2"
    ],
    "numeric_answer": 41.7,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.8340000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 133,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "抵抗20Ωと容量性リアクタンス15Ωの直列回路に115Vの交流電圧を加えたとき、この回路に流れる電流I[A]を求めよ。また、インピーダンス角θ[rad]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: XC= 4.6A",
    "tags": [
      "第4章交流回路",
      "2-3直列回路2"
    ],
    "numeric_answer": 4.6,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.092,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 134,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "誘導性のRLC直列回路において、インピーダンス角θ=0.3rad、抵抗R=5Ω、誘導性リアクタンスXL=17Ωである。この回路の容量性リアクタンスXC[Ω]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: XC= 15.5Ω",
    "tags": [
      "第4章交流回路",
      "2-3直列回路3"
    ],
    "numeric_answer": 15.5,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.31,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 135,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "160Vの交流電圧を加えたRLC直列回路において、抵抗R=8Ω、誘導性リアクタンスXL=12Ω、容量性リアクタンスXC=34Ωとしたとき、インピーダンス角θ[rad]を求めよ。また、回路に流れる電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: θ＝ 1.22rad",
    "tags": [
      "第4章交流回路",
      "2-3直列回路3"
    ],
    "numeric_answer": 1.22,
    "numeric_unit": "rad",
    "numeric_tolerance_abs": 0.0244,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 136,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "RLC直列回路において、抵抗R=33Ω、コイルL=500H、コンデンサC=2.8μFとしたとき、この回路の共振周波数f0[Hz]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: f0= 4.25Hz",
    "tags": [
      "第4章交流回路",
      "2-3直列回路3"
    ],
    "numeric_answer": 0.0,
    "numeric_unit": "= 4.25Hz",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 137,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "共振周波数f0=380HzのRLC直列回路において、抵抗R=41Ω、インダクタンスL=44mHであるとき、この回路の静電容量C[μF]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: C= 3.99μF",
    "tags": [
      "第4章交流回路",
      "2-3直列回路3"
    ],
    "numeric_answer": 3.99,
    "numeric_unit": "μF",
    "numeric_tolerance_abs": 0.07980000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 138,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "下図のRL並列回路において、電圧V=110V、抵抗R=3Ω、誘導性リアクタンスXL=4Ωのときの、回路を流れる電流I[A]および電圧Ⓥと電流Ⓘの位相差θ[rad]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: I= 45.8A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路1"
    ],
    "numeric_answer": 45.8,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.9159999999999999,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路1_1.png"
  },
  {
    "id": 139,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "抵抗82Ωと誘導性リアクタンス60Ωを並列に接続した。このRL並列回路に110Vの電圧を加えたとき、抵抗に流れる電流IR[A]、誘導性リアクタンスに流れる電流IL[A]、回路に流れる電流I[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: IR= 1.34A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路1"
    ],
    "numeric_answer": 1.34,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.0268,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路1_1.png"
  },
  {
    "id": 140,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "上図のRL並列回路において、抵抗R=6.9Ω、インピーダンスZ=4Ωのときの、誘導性リアクタンスXL[Ω]を求めよ。また、電流I=7Aのときの電圧V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: XL= 4.91Ω",
    "tags": [
      "第4章交流回路",
      "2-4並列回路1"
    ],
    "numeric_answer": 4.91,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.09820000000000001,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路1_1.png"
  },
  {
    "id": 141,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "下図のRC並列回路において、電圧V=110V、抵抗R=6Ω、容量性リアクタンスXC=4Ωのときの、回路を流れる電流I[A]および電圧Ⓥと電流Ⓘの位相差θ[rad]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: I= 33.1A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路2"
    ],
    "numeric_answer": 33.1,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.662,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路2_1.png"
  },
  {
    "id": 142,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "上図において、R=4Ω、XC=33Ω、電圧V=100Vのとき、IR[A],IC[A],I[A]を求めよ。また、電圧Vと電流Iの位相差θ[rad]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: IR= 25A I= 25.2A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路2"
    ],
    "numeric_answer": 25.0,
    "numeric_unit": "A I= 25.2A",
    "numeric_tolerance_abs": 0.5,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路2_1.png"
  },
  {
    "id": 143,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "抵抗22Ωと容量性リアクタンス45Ωを並列に接続した。このRC並列回路に380Vの電圧を加えたとき、抵抗に流れる電流IR[A]、容量性リアクタンスに流れる電流IC[A]、回路に流れるI[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: IR= 17.3A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路2"
    ],
    "numeric_answer": 17.3,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.34600000000000003,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路2_1.png"
  },
  {
    "id": 144,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "上図の回路においてE=190V、R=141Ω、L=30mH、C=480μFであるとき、共振周波数f0[Hz]および、共振時に抵抗に流れる電流IR[A]、コイルに流れる電流IL[A]、コンデンサに流れる電流IC[A]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: f0= 41.9Hz IL= 24A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路3"
    ],
    "numeric_answer": 0.0,
    "numeric_unit": "= 41.9Hz IL= 24A",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_2-4並列回路3_1.png"
  },
  {
    "id": 145,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "皮相電力S=1.1kV･Aの電気機器に14Aの電流が流れている。このときに加えた電圧V[V]を求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: 78.6V",
    "tags": [
      "第4章交流回路",
      "3-2皮相、有効、無効電力"
    ],
    "numeric_answer": 78.6,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 1.5719999999999998,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_3-2皮相有効無効電力_1.png"
  },
  {
    "id": 146,
    "category": "第4章 交流回路",
    "difficulty": 1,
    "text": "ある電気器具に230Vの交流電圧を加えたとき、15Aの電流が流れ、841Wの電力が消費された。力率cosθと無効率sinθを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: cosθ= 0.244 ② 0.962",
    "tags": [
      "第4章交流回路",
      "3-2皮相、有効、無効電力"
    ],
    "numeric_answer": 0.244,
    "numeric_unit": "② 0.962",
    "numeric_tolerance_abs": 0.00488,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_3-2皮相有効無効電力_1.png"
  },
  {
    "id": 147,
    "category": "第4章 交流回路",
    "difficulty": 2,
    "text": "負荷で消費される有効電力P=5900W、無効電力Q=4900varであるとき、皮相電力S[kV･A]および力率cosθを求めよ。",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "Excel解答: S= 7.67kV･A",
    "tags": [
      "第4章交流回路",
      "3-2皮相、有効、無効電力"
    ],
    "numeric_answer": 7.67,
    "numeric_unit": "kV･A",
    "numeric_tolerance_abs": 0.1534,
    "numeric_tolerance_rel": 0.02,
    "image": "/assets/questions/第4章交流回路_3-2皮相有効無効電力_1.png"
  }
];
