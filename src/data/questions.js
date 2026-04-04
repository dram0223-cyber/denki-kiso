const questions = [
  {
    "id": 1,
    "category": "第1章 直流回路",
    "chapter": "1-1電気回路",
    "difficulty": 1,
    "text": "8秒間に42Cの電気量が移動したときに流れる電流I[A]はいくらか。\n\n【ヒント】 I = Q / t",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 I = Q / t\n【代入】 I = 42 ÷ 8\n【計算】 I = 5.25\n【答え】 5.25 A",
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
    "chapter": "1-1電気回路",
    "difficulty": 1,
    "text": "電線に9Aの電流が3秒間流れたとき、その電線の断面を移動した電子の個数を求めよ。\n\n【ヒント】 電子数 = Q / e，Q = I × t，e = 1.6×10⁻¹⁹ C",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 電子数 = Q / e，Q = I × t，e = 1.6×10⁻¹⁹ C\n【代入】 Q = 9 × 3 = 27 C\n【計算】 電子数 = 27 ÷ (1.6×10⁻¹⁹) = 1.69×10²⁰\n【答え】 1.69×10²⁰ 個",
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
    "chapter": "1-1電気回路",
    "difficulty": 1,
    "text": "17μAの電流がｔ秒間流れた。このとき44μCの電気量が移動した。何秒間流れたか。\n\n【ヒント】 t = Q / I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 t = Q / I\n【代入】 t = 44×10⁻⁶ ÷ 17×10⁻⁶\n【計算】 t = 44 ÷ 17 = 2.59\n【答え】 2.59 秒間",
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
    "chapter": "1-1電気回路",
    "difficulty": 2,
    "text": "15分間に6Aの電流を流したとき、いくらの電気量が移動したか。\n\n【ヒント】 Q = I × t",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Q = I × t\n【代入】 t = 15分 = 15×60 = 900 s，Q = 6 × 900\n【計算】 Q = 5400 C = 5.4 kC\n【答え】 5.4 kC",
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
    "chapter": "1-2オームの法則",
    "difficulty": 1,
    "text": "下図の回路において67Ωの抵抗に283Vの電圧を加えると、何[A]の電流が流れるか。\n\n【ヒント】 I = V / R",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 I = V / R\n【代入】 I = 283 ÷ 67\n【計算】 I = 4.22\n【答え】 4.22 A",
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
    "chapter": "1-2オームの法則",
    "difficulty": 1,
    "text": "上図の回路において、抵抗Rが12Ωのとき、4Aの電流が流れた。電源電圧[V]を求めよ。\n\n【ヒント】 V = I × R",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 V = I × R\n【代入】 V = 4 × 12\n【計算】 V = 48\n【答え】 48 V",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 48.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 0.96,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 7,
    "category": "第1章 直流回路",
    "chapter": "1-2オームの法則",
    "difficulty": 1,
    "text": "上図の回路において、抵抗Rに133Vの電圧を加えたとき、12Aの電流が流れた。抵抗R[Ω]を求めよ。\n\n【ヒント】 R = V / I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = V / I\n【代入】 R = 133 ÷ 12\n【計算】 R = 11.1\n【答え】 11.1 Ω",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 11.1,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.222,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 8,
    "category": "第1章 直流回路",
    "chapter": "1-2オームの法則",
    "difficulty": 2,
    "text": "ある抵抗に119Vの電圧を加えたとき、10Aの電流が流れた。この抵抗に128Vの電圧を加えたときの電流I[A]を求めよ。\n\n【ヒント】 R = V / I，次に I = V / R",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = V / I，次に I = V / R\n【代入】 R = 119 ÷ 10 = 11.9 Ω，I = 128 ÷ 11.9\n【計算】 I = 10.8\n【答え】 10.8 A",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 10.8,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.21600000000000003,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 9,
    "category": "第1章 直流回路",
    "chapter": "1-2オームの法則",
    "difficulty": 2,
    "text": "7MΩの抵抗に98ｍAの電流が流れている。この抵抗の両端に生じる電圧降下は何[V]か。また、何[ｋV]か\n\n【ヒント】 V = I × R",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 V = I × R\n【代入】 V = 98×10⁻³ × 7×10⁶\n【計算】 V = 0.098 × 7000000 = 686000 V = 686 kV\n【答え】 686000 V（686 kV）",
    "tags": [
      "第1章直流回路",
      "1-2オームの法則"
    ],
    "numeric_answer": 686000.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 13720.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 10,
    "category": "第1章 直流回路",
    "chapter": "1-4並列接続",
    "difficulty": 1,
    "text": "20Ωの抵抗器2個を並列に接続した回路の合成抵抗R[Ω]を求めよ。\n\n【ヒント】 並列2個同値: R = R1 × R2 / (R1 + R2)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 並列2個同値: R = R1 × R2 / (R1 + R2)\n【代入】 R = 20 × 20 / (20 + 20)\n【計算】 R = 400 / 40 = 10\n【答え】 10 Ω",
    "tags": [
      "第1章直流回路",
      "1-4並列接続"
    ],
    "numeric_answer": 10.0,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.2,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 11,
    "category": "第1章 直流回路",
    "chapter": "1-4並列接続",
    "difficulty": 1,
    "text": "5Ωと10Ωと26Ωの抵抗器を並列に接続した回路の合成抵抗R[Ω]はいくらか。\n\n【ヒント】 1/R = 1/R1 + 1/R2 + 1/R3",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 1/R = 1/R1 + 1/R2 + 1/R3\n【代入】 1/R = 1/5 + 1/10 + 1/26 = 0.2 + 0.1 + 0.03846 = 0.33846\n【計算】 R = 1 / 0.33846 = 2.95\n【答え】 2.95 Ω",
    "tags": [
      "第1章直流回路",
      "1-4並列接続"
    ],
    "numeric_answer": 2.95,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.059000000000000004,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 12,
    "category": "第1章 直流回路",
    "chapter": "1-4並列接続",
    "difficulty": 1,
    "text": "下図の回路において、各抵抗に流れるI1[A],I2[A]を求めよ。\n\n【ヒント】 並列回路：各抵抗に同じ電圧が加わる，I = V / R",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 並列回路：各抵抗に同じ電圧が加わる，I = V / R\n【代入】 回路の電圧Vを求め，I1 = V / R1\n【計算】 I1 = 3.91\n【答え】 I1 = 3.91 A",
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
    "chapter": "1-4並列接続",
    "difficulty": 2,
    "text": "下図の回路において、I[A],I1[A],I2[A]を求めよ。\n\n【ヒント】 並列回路：I = I1 + I2，I1 = V/R1，I2 = V/R2",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 並列回路：I = I1 + I2，I1 = V/R1，I2 = V/R2\n【代入】 図の電圧と抵抗値を代入\n【計算】 I = 5.44\n【答え】 I = 5.44 A",
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
    "chapter": "1-5応用1",
    "difficulty": 1,
    "text": "下図の回路のa-b間の合成抵抗Rab[Ω]を求めよ。\n\n【ヒント】 直並列合成抵抗：並列部分を先に計算し，直列部分を加算",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 直並列合成抵抗：並列部分を先に計算し，直列部分を加算\n【代入】 図の各抵抗値を順次合成\n【計算】 Rab = 4.14\n【答え】 4.14 Ω",
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
    "chapter": "1-5応用2",
    "difficulty": 2,
    "text": "内部抵抗240kΩ、最大目盛20Vの電圧計がある。210kΩの抵抗を直列抵抗器として接続したとき、この電圧計で測定できる最大の値[V]を求めよ。\n\n【ヒント】 倍率器付き電圧計: Vmax = V0 × (Rv + Rs) / Rv",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 倍率器付き電圧計: Vmax = V0 × (Rv + Rs) / Rv\n【代入】 Vmax = 20 × (240 + 210) / 240\n【計算】 Vmax = 20 × 450 / 240 = 20 × 1.875 = 37.5\n【答え】 37.5 V",
    "tags": [
      "第1章直流回路",
      "1-5応用2"
    ],
    "numeric_answer": 37.5,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 0.75,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 16,
    "category": "第1章 直流回路",
    "chapter": "1-6電池の接続",
    "difficulty": 1,
    "text": "起電力E=1.7Vの電池に、10Aの電流を流したとき、端子電圧はV=1.5Vであった。電池の内部抵抗ｒ[Ω]を求めよ。\n\n【ヒント】 r = (E - V) / I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 r = (E - V) / I\n【代入】 r = (1.7 - 1.5) / 10\n【計算】 r = 0.2 / 10 = 0.02\n【答え】 0.02 Ω",
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
    "chapter": "1-6電池の接続",
    "difficulty": 1,
    "text": "内部抵抗0.2Ω、起電力1.6Vの電池を、12個直列に接続した場合、全体の内部抵抗ｒ[Ω]および全体の起電力E[V]を求めよ。\n\n【ヒント】 直列接続: r_total = n × r，E_total = n × E",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 直列接続: r_total = n × r，E_total = n × E\n【代入】 r_total = 12 × 0.2，E_total = 12 × 1.6\n【計算】 r_total = 2.4 Ω，E_total = 19.2 V\n【答え】 r = 2.4 Ω，E = 19.2 V",
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
    "chapter": "1-6電池の接続",
    "difficulty": 1,
    "text": "起電力1.9Vの電池5個を直列に接続したものに、抵抗2.3Ωを繋ぐと端子電圧が7.5Vになる。端子間を短絡したときの電流I[A]はいくらか。\n\n【ヒント】 E_total = n×E，r = (E_total - V) / I_負荷，I_短絡 = E_total / r",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 E_total = n×E，r = (E_total - V) / I_負荷，I_短絡 = E_total / r\n【代入】 E_total = 5×1.9 = 9.5 V，I_負荷 = 7.5/2.3 = 3.26 A，r = (9.5-7.5)/3.26 = 0.613 Ω\n【計算】 I_短絡 = 9.5 / 0.613 = 15.5\n【答え】 15.5 A",
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
    "chapter": "1-6電池の接続",
    "difficulty": 2,
    "text": "内部抵抗1Ω、起電力1.2Vの電池を5個並列に接続し、これに19.5Ωの抵抗を直列に接続した。各電池に流れる電流I[ｍA]はいくらか。\n\n【ヒント】 並列接続: r_total = r/n，E_total = E，I_total = E_total/(R + r_total)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 並列接続: r_total = r/n，E_total = E，I_total = E_total/(R + r_total)\n【代入】 r_total = 1/5 = 0.2 Ω，I_total = 1.2/(19.5 + 0.2) = 1.2/19.7 = 0.061 A\n【計算】 各電池の電流 = I_total / 5 = 0.061/5 = 0.0122 A = 12.2 mA\n【答え】 12.2 mA",
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
    "chapter": "1-6電池の接続",
    "difficulty": 2,
    "text": "内部抵抗0.7Ω、起電力6Vの電池を5個、並列に接続した場合、全体の内部抵抗ｒ[Ω]および全体の起電力E[V]を求めよ。\n\n【ヒント】 並列接続: r_total = r/n，E_total = E（起電力は変わらない）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 並列接続: r_total = r/n，E_total = E（起電力は変わらない）\n【代入】 r_total = 0.7/5，E_total = 6\n【計算】 r_total = 0.14 Ω，E_total = 6 V\n【答え】 r = 0.14 Ω，E = 6 V",
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
    "chapter": "2-1電流の発熱作用",
    "difficulty": 1,
    "text": "13Ωの抵抗に9Aの電流を27分間流した。このとき発生する熱エネルギーは何[kJ]か。\n\n【ヒント】 W = I²Rt",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 W = I²Rt\n【代入】 W = 9² × 13 × (27×60) = 81 × 13 × 1620\n【計算】 W = 1053 × 1620 = 1,705,860 J ≈ 1710 kJ\n【答え】 1710 kJ",
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
    "chapter": "2-1電流の発熱作用",
    "difficulty": 1,
    "text": "13Ωの抵抗に17Vの電圧を1時間通電した場合、発生する熱エネルギーは何[kJ]か。\n\n【ヒント】 P = V²/R，W = P × t",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 P = V²/R，W = P × t\n【代入】 P = 17² / 13 = 289 / 13 = 22.2 W，t = 3600 s\n【計算】 W = 22.2 × 3600 = 79984 J ≈ 80 kJ\n【答え】 80 kJ",
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
    "chapter": "2-1電流の発熱作用",
    "difficulty": 1,
    "text": "134Ωの抵抗に1Aの電流を12分間流したとき、発生する熱エネルギーで7℃の水5kgを加熱すると、水の温度は何度になるか。ただし、発生した熱量がすべて水の温度上昇に使われるものとする。\n\n【ヒント】 Q = I²Rt，ΔT = Q / (c × m)，c = 4186 J/(kg·℃)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Q = I²Rt，ΔT = Q / (c × m)，c = 4186 J/(kg·℃)\n【代入】 Q = 1² × 134 × (12×60) = 134 × 720 = 96480 J\n【計算】 ΔT = 96480 / (4186 × 5) = 96480 / 20930 = 4.61℃，最終温度 = 7 + 4.61 = 11.6℃\n【答え】 11.6 ℃",
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
    "chapter": "2-1電力と電力量",
    "difficulty": 1,
    "text": "141Vの電源に接続された抵抗器がある。電流を測定すると、12Aであった。このとき、抵抗R[Ω]及び抵抗器に供給されている電力P[W]を求めよ。\n\n【ヒント】 R = V/I，P = V × I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = V/I，P = V × I\n【代入】 R = 141/12，P = 141 × 12\n【計算】 R = 11.8 Ω，P = 1692 W\n【答え】 R = 11.8 Ω，P = 1692 W",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 11.8,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.23600000000000002,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 25,
    "category": "第1章 直流回路",
    "chapter": "2-1電力と電力量",
    "difficulty": 1,
    "text": "ある電熱線に130Vの電圧が加わり、4Aの電流が流れている。1時間20分使用すると、その間に消費される電力量Wは何キロジュールか。また、何キロワット時か。\n\n【ヒント】 P = V × I，W = P × t",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 P = V × I，W = P × t\n【代入】 P = 130 × 4 = 520 W，t = 1時間20分 = 4800 s\n【計算】 W = 520 × 4800 = 2,496,000 J ≈ 2500 kJ\n【答え】 2500 kJ（≒ 0.694 kWh）",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 2500.0,
    "numeric_unit": "kJ",
    "numeric_tolerance_abs": 50.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 26,
    "category": "第1章 直流回路",
    "chapter": "2-1電力と電力量",
    "difficulty": 1,
    "text": "12Ωの抵抗があって、その許容電力は27kWであるという。許容電流I[A]を求めよ。\n\n【ヒント】 P = I²R → I = √(P/R)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 P = I²R → I = √(P/R)\n【代入】 I = √(27000 / 12)\n【計算】 I = √2250 = 47.4\n【答え】 47.4 A",
    "tags": [
      "第1章直流回路",
      "2-1電力と電力量"
    ],
    "numeric_answer": 47.4,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.948,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 27,
    "category": "第1章 直流回路",
    "chapter": "2-1電力と電力量",
    "difficulty": 2,
    "text": "下図の回路に5.23Aの電流が流れている。抵抗Rで消費される電力P[W]を求めよ。\n\n【ヒント】 P = I²R",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 P = I²R\n【代入】 図の抵抗Rの値とI = 5.23 Aを代入\n【計算】 P = 5.23² × R = 27.35 × R ≈ 118\n【答え】 118 W",
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
    "chapter": "3-1抵抗率と導電率",
    "difficulty": 1,
    "text": "直径1.3mm、長さ61mの銅線と同じ抵抗値にするには、直径2.3mmの銅線では、何メートルにすればよいか。\n\n【ヒント】 R = ρl/A，A ∝ d²，同じRなら l1/d1² = l2/d2²，l2 = l1 × (d2/d1)²",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = ρl/A，A ∝ d²，同じRなら l1/d1² = l2/d2²，l2 = l1 × (d2/d1)²\n【代入】 l2 = 61 × (2.3/1.3)²\n【計算】 l2 = 61 × (1.769)² = 61 × 3.13 = 191\n【答え】 191 m",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 191.0,
    "numeric_unit": "m",
    "numeric_tolerance_abs": 3.8200000000000003,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 29,
    "category": "第1章 直流回路",
    "chapter": "3-1抵抗率と導電率",
    "difficulty": 1,
    "text": "ある電線の断面積を１／6倍にし、長さを4倍にすると、この電線の抵抗はもとの値の何倍になるか。\n\n【ヒント】 R = ρl/A，R_new/R_old = (l_new/l_old) × (A_old/A_new)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = ρl/A，R_new/R_old = (l_new/l_old) × (A_old/A_new)\n【代入】 l_new = 4l，A_new = A/6\n【計算】 R_new/R_old = 4 × 6 = 24 倍\n【答え】 24 倍",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 24.0,
    "numeric_unit": "倍",
    "numeric_tolerance_abs": 0.48,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 30,
    "category": "第1章 直流回路",
    "chapter": "3-1抵抗率と導電率",
    "difficulty": 1,
    "text": "ある電線の直径を4倍にし、長さを5倍にすると、この電線の抵抗はもとの値の何倍になるか。\n\n【ヒント】 R = ρl/A，A ∝ d²，d_new = 4d → A_new = 16A",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = ρl/A，A ∝ d²，d_new = 4d → A_new = 16A\n【代入】 R_new/R_old = (l_new/l_old) × (A_old/A_new) = 5 × (1/16)\n【計算】 R_new/R_old = 5/16 = 0.313\n【答え】 0.313 倍",
    "tags": [
      "第1章直流回路",
      "3-1抵抗率と導電率"
    ],
    "numeric_answer": 0.313,
    "numeric_unit": "倍",
    "numeric_tolerance_abs": 0.00626,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 31,
    "category": "第1章 直流回路",
    "chapter": "3-1抵抗率と導電率",
    "difficulty": 2,
    "text": "20℃で抵抗が5Ωの金線がある。92℃のときの抵抗R[Ω]を求めよ。ただし、抵抗温度係数は下の表の値を用いること。\n\n【ヒント】 R_t = R_0 × (1 + α × ΔT)，金のα = 0.0034/℃",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R_t = R_0 × (1 + α × ΔT)，金のα = 0.0034/℃\n【代入】 R_t = 5 × (1 + 0.0034 × (92 - 20)) = 5 × (1 + 0.0034 × 72)\n【計算】 R_t = 5 × (1 + 0.2448) = 5 × 1.2448 = 6.22\n【答え】 6.22 Ω",
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
    "chapter": "4-1電流の化学作用",
    "difficulty": 1,
    "text": "硫酸銅溶液5Aの電流を23分間流した。銅の析出量w[g]はいくらか。\n\n【ヒント】 w = MIt / (nF)，銅: M = 63.5，n = 2，F = 96500 C/mol",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 w = MIt / (nF)，銅: M = 63.5，n = 2，F = 96500 C/mol\n【代入】 w = 63.5 × 5 × (23×60) / (2 × 96500)\n【計算】 w = 63.5 × 5 × 1380 / 193000 = 437850 / 193000 = 2.27\n【答え】 2.27 g",
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
    "chapter": "4-1電流の化学作用",
    "difficulty": 1,
    "text": "電気分解により、銅を精製する装置がある。この装置を使用して、純銅7kgを得るには、180Aの直流を何時間何分何秒流す必要があるか。また、原子量とイオンの価数は上の表を使うこと。\n\n【ヒント】 t = wnF / (MI)，銅: M = 63.5，n = 2，F = 96500 C/mol",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 t = wnF / (MI)，銅: M = 63.5，n = 2，F = 96500 C/mol\n【代入】 t = 7000 × 2 × 96500 / (63.5 × 180)\n【計算】 t = 1351000000 / 11430 = 118247 s = 32時間49分7秒 ≈ 32時間49分57秒\n【答え】 32時間49分57秒",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 32.0,
    "numeric_unit": "時間49分57秒",
    "numeric_tolerance_abs": 0.64,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 34,
    "category": "第1章 直流回路",
    "chapter": "4-1電流の化学作用",
    "difficulty": 1,
    "text": "硝酸銀溶液から銀を48g析出するのに、必要な電気量Qは何クーロンか。また、これは何アンペア時にあたるか。また、原子量とイオンの価数は上の表を使うこと。\n\n【ヒント】 Q = wnF / M，銀: M = 108，n = 1，F = 96500 C/mol",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Q = wnF / M，銀: M = 108，n = 1，F = 96500 C/mol\n【代入】 Q = 48 × 1 × 96500 / 108\n【計算】 Q = 4632000 / 108 = 42900 C\n【答え】 42900 C（≒ 11.9 Ah）",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 42900.0,
    "numeric_unit": "C",
    "numeric_tolerance_abs": 858.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 35,
    "category": "第1章 直流回路",
    "chapter": "4-1電流の化学作用",
    "difficulty": 2,
    "text": "4.1A･hの二次電池から0.3Aの電流が流れだしている。何時間使用できるか。\n\n【ヒント】 t = C / I（電池容量C[Ah]，電流I[A]）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 t = C / I（電池容量C[Ah]，電流I[A]）\n【代入】 t = 4.1 / 0.3\n【計算】 t = 13.7\n【答え】 13.7 h",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 13.7,
    "numeric_unit": "h",
    "numeric_tolerance_abs": 0.27399999999999997,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 36,
    "category": "第1章 直流回路",
    "chapter": "4-1電流の化学作用",
    "difficulty": 2,
    "text": "8Aの電流を17時間流すことができる鉛蓄電池の容量[A･h]を求めよ。\n\n【ヒント】 C = I × t",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 C = I × t\n【代入】 C = 8 × 17\n【計算】 C = 136\n【答え】 136 Ah",
    "tags": [
      "第1章直流回路",
      "4-1電流の化学作用"
    ],
    "numeric_answer": 136.0,
    "numeric_unit": "A･h",
    "numeric_tolerance_abs": 2.72,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 37,
    "category": "第2章 電流と磁気",
    "chapter": "1-1磁石と磁気",
    "difficulty": 1,
    "text": "下図に示すように、空気中で磁極の強さがm1=5E-05Wb、m2=5E-04Wb、両極間の距離r=18cmであるとき、両極間に働く力F[N]はいくらか。\n\n【ヒント】 F = m1 × m2 / (4π × μ0 × r²)，μ0 = 4π×10⁻⁷，6.33×10⁻⁵ = 1/(4πμ0)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = m1 × m2 / (4π × μ0 × r²)，μ0 = 4π×10⁻⁷，6.33×10⁻⁵ = 1/(4πμ0)\n【代入】 F = (5×10⁻⁵ × 5×10⁻⁴) / (6.33×10⁻⁵ × 0.18²)\n【計算】 F = 2.5×10⁻⁸ / (6.33×10⁻⁵ × 0.0324) = 2.5×10⁻⁸ / 2.051×10⁻⁶ = 0.0488\n【答え】 0.0488 N",
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
    "chapter": "1-1磁石と磁気",
    "difficulty": 1,
    "text": "空気中で二つの磁極の強さが7E-06Wb、-7E-06Wb、両極間の距離が1.2mであるとき、磁極間に働く力F[N]を求めよ。また、その力は反発力か吸引力か。\n\n【ヒント】 F = m1 × m2 / (4π × μ0 × r²)，異符号 → 吸引力",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = m1 × m2 / (4π × μ0 × r²)，異符号 → 吸引力\n【代入】 F = (7×10⁻⁶) × (-7×10⁻⁶) / (6.33×10⁻⁵ × 1.2²)\n【計算】 F = -49×10⁻¹² / (6.33×10⁻⁵ × 1.44) = -49×10⁻¹² / 9.115×10⁻⁵ ≈ -2.15×10⁻⁶ N（吸引力）\n【答え】 約 -2.15×10⁻⁶ N（吸引力）",
    "tags": [
      "第2章電流と磁気",
      "1-1磁石と磁気"
    ],
    "numeric_answer": -2.15395833333e-06,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 39,
    "category": "第2章 電流と磁気",
    "chapter": "1-1磁石と磁気",
    "difficulty": 1,
    "text": "空気中で二つの磁極の強さが1.3E-04Wb、4.3E-05Wbであり、そのとき両極間に働く力は0.755Nであった。磁極間の距離r[cm]を求めよ。\n\n【ヒント】 F = m1 × m2 / (4π × μ0 × r²) → r = √(m1 × m2 / (4π × μ0 × F))",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = m1 × m2 / (4π × μ0 × r²) → r = √(m1 × m2 / (4π × μ0 × F))\n【代入】 r = √(1.3×10⁻⁴ × 4.3×10⁻⁵ / (6.33×10⁻⁵ × 0.755))\n【計算】 r = √(5.59×10⁻⁹ / 4.78×10⁻⁵) = √(1.17×10⁻⁴) = 0.0216 m = 2.16 cm\n【答え】 2.16 cm",
    "tags": [
      "第2章電流と磁気",
      "1-1磁石と磁気"
    ],
    "numeric_answer": 2.16,
    "numeric_unit": "cm",
    "numeric_tolerance_abs": 0.0432,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 40,
    "category": "第2章 電流と磁気",
    "chapter": "1-3磁界の強さ１",
    "difficulty": 1,
    "text": "下図のように、空気中で10E-06Wbの磁極から18cm離れた点Pの磁界の大きさH[A/m]はいくらか。\n\n【ヒント】 H = m / (4π × μ0 × r²)，係数 4πμ0 = 16π²×10⁻⁷ → H = m / (6.33×10⁻⁵ × r²) の簡略形を使用",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = m / (4π × μ0 × r²)，係数 4πμ0 = 16π²×10⁻⁷ → H = m / (6.33×10⁻⁵ × r²) の簡略形を使用\n【代入】 H = 10×10⁻⁶ / (6.33×10⁻⁵ × 0.18²)\n【計算】 H = 10⁻⁵ / (6.33×10⁻⁵ × 0.0324) = 10⁻⁵ / 2.051×10⁻⁶ = 19.5\n【答え】 19.5 A/m",
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
    "chapter": "1-3磁界の強さ１",
    "difficulty": 1,
    "text": "空気中で、m=8E-06Wbの磁極から19cm離れた点の磁界の大きさH[A/m]を求めよ。\n\n【ヒント】 H = m / (6.33×10⁻⁵ × r²)（空気中のクーロン定数簡略形）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = m / (6.33×10⁻⁵ × r²)（空気中のクーロン定数簡略形）\n【代入】 H = 8×10⁻⁶ / (6.33×10⁻⁵ × 0.19²)\n【計算】 H = 8×10⁻⁶ / (6.33×10⁻⁵ × 0.0361) = 8×10⁻⁶ / 2.285×10⁻⁶ = 14\n【答え】 14 A/m",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ１"
    ],
    "numeric_answer": 14.0,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 0.28,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 42,
    "category": "第2章 電流と磁気",
    "chapter": "1-3磁界の強さ１",
    "difficulty": 1,
    "text": "磁界の大きさが2A/mの磁界中に、9E-03Wbの磁極を置いたとき、この磁極に働く力F[N]を求めよ。\n\n【ヒント】 F = m × H",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = m × H\n【代入】 F = 9×10⁻³ × 2\n【計算】 F = 0.018\n【答え】 0.018 N",
    "tags": [
      "第2章電流と磁気",
      "1-3磁界の強さ１"
    ],
    "numeric_answer": 0.018,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 0.00035999999999999997,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 43,
    "category": "第2章 電流と磁気",
    "chapter": "1-3磁界の強さ２",
    "difficulty": 1,
    "text": "円形コイルの半径ｒが0.8m、電流Iが1.3A、コイルの巻数Nが18であるとき、コイルの中心の磁界の大きさH[A/m]を求めよ。\n\n【ヒント】 H = NI / (2r)（円形コイル中心磁界）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = NI / (2r)（円形コイル中心磁界）\n【代入】 H = 18 × 1.3 / (2 × 0.8)\n【計算】 H = 23.4 / 1.6 = 14.6\n【答え】 14.6 A/m",
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
    "chapter": "1-3磁界の強さ２",
    "difficulty": 1,
    "text": "円形コイルの直径が2cm、コイルの巻数が160のとき、コイルの中心の磁界の大きさが1.8A/mであった。コイルに流れる電流は何ミリアンペアか。\n\n【ヒント】 H = NI / (2r) → I = H × 2r / N，r = 直径/2 = 0.01 m",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = NI / (2r) → I = H × 2r / N，r = 直径/2 = 0.01 m\n【代入】 I = 1.8 × 2 × 0.01 / 160\n【計算】 I = 0.036 / 160 = 2.25×10⁻⁴ A = 0.225 mA\n【答え】 0.225 mA",
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
    "chapter": "1-3磁界の強さ２",
    "difficulty": 1,
    "text": "10Aの電流が流れている直線状導体がある。導体から4cmおよび24cm離れた点の磁界の大きさH1[A/m], H2[A/m]を求めよ。\n\n【ヒント】 H = I / (2πr)（直線導体の磁界）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = I / (2πr)（直線導体の磁界）\n【代入】 H1 = 10 / (2π × 0.04)，H2 = 10 / (2π × 0.24)\n【計算】 H1 = 10 / 0.2513 = 39.8 A/m，H2 = 10 / 1.508 = 6.63 A/m\n【答え】 H1 = 39.8 A/m，H2 = 6.63 A/m",
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
    "chapter": "1-3磁界の強さ２",
    "difficulty": 2,
    "text": "直線状導体から6cm離れた点の磁界の大きさが62A/mであった。直線状導体に流れている電流I[A]を求めよ。\n\n【ヒント】 H = I / (2πr) → I = H × 2πr",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = I / (2πr) → I = H × 2πr\n【代入】 I = 62 × 2π × 0.06\n【計算】 I = 62 × 0.3770 = 23.4\n【答え】 23.4 A",
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
    "chapter": "1-3磁界の強さ３",
    "difficulty": 1,
    "text": "1ｍあたり巻数480回の無限に長いソレノイドに9Aの電流を流したときの、ソレノイド内部に発生する磁界の大きさH[A/m]を求めよ。\n\n【ヒント】 H = nI（n: 単位長さあたりの巻数 [回/m]）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = nI（n: 単位長さあたりの巻数 [回/m]）\n【代入】 H = 480 × 9\n【計算】 H = 4320\n【答え】 4320 A/m",
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
    "chapter": "1-3磁界の強さ３",
    "difficulty": 1,
    "text": "4cmあたり巻数72回の無限に長いソレノイドに電流を流したとき、ソレノイド内部に発生する磁界の大きさが28A/mであった。流れている電流I[mA]を求めよ。\n\n【ヒント】 H = nI → I = H / n，n = 72 / 0.04 = 1800 回/m",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = nI → I = H / n，n = 72 / 0.04 = 1800 回/m\n【代入】 I = 28 / 1800\n【計算】 I = 0.01556 A = 15.6 mA\n【答え】 15.6 mA",
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
    "chapter": "1-3磁界の強さ３",
    "difficulty": 1,
    "text": "巻数54、平均の長さ2.7mの環状コイルに9Aの電流を流した。環状コイルの内部に生じる磁界の大きさH[A/m]を求めよ。\n\n【ヒント】 H = NI / l（環状コイル）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = NI / l（環状コイル）\n【代入】 H = 54 × 9 / 2.7\n【計算】 H = 486 / 2.7 = 180\n【答え】 180 A/m",
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
    "chapter": "1-3磁界の強さ３",
    "difficulty": 2,
    "text": "平均の長さ3.1mの環状コイルに4Aの電流を流したとき、環状コイルの内部に大きさ520A/mの磁界が生じた。コイルの巻数Nを求めよ。\n\n【ヒント】 H = NI / l → N = H × l / I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = NI / l → N = H × l / I\n【代入】 N = 520 × 3.1 / 4\n【計算】 N = 1612 / 4 = 403\n【答え】 403 回",
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
    "chapter": "2-1電磁力",
    "difficulty": 1,
    "text": "下図で、磁束密度B=8T、電流I=10A、磁界中の導体の長さl=0.6m、磁界の向きが電流の向きに対してθ=65°の角度をなすとき、導体に働く力の大きさF[N]はいくらか。\n\n【ヒント】 F = BIl sinθ",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = BIl sinθ\n【代入】 F = 8 × 10 × 0.6 × sin65°\n【計算】 F = 48 × 0.9063 = 43.5\n【答え】 43.5 N",
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
    "chapter": "2-1電磁力",
    "difficulty": 2,
    "text": "上図において、電流I=9A、磁界中の導体の長さl=5.2cm、θ=30°のとき、導体に1.74Nの力が生じた。磁束密度B[T]を求めよ。\n\n【ヒント】 F = BIl sinθ → B = F / (Il sinθ)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = BIl sinθ → B = F / (Il sinθ)\n【代入】 B = 1.74 / (9 × 0.052 × sin30°)\n【計算】 B = 1.74 / (9 × 0.052 × 0.5) = 1.74 / 0.234 = 7.44\n【答え】 7.44 T",
    "tags": [
      "第2章電流と磁気",
      "2-1電磁力"
    ],
    "numeric_answer": 7.44,
    "numeric_unit": "T",
    "numeric_tolerance_abs": 0.14880000000000002,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 53,
    "category": "第2章 電流と磁気",
    "chapter": "2-2方形コイルに働くトルク",
    "difficulty": 1,
    "text": "巻数N=630、面積A=0.003m^2のコイルがある。このコイルを磁束密度B=0.8Tの磁界に水平に置き、コイルに電流540mAを流した。コイルに働くトルクT[N･m]を求めよ。また、電流Iを260mAに減少させると、トルクTはもとの何倍になるか。\n\n【ヒント】 T = NIAB（コイル面が磁界に平行なとき cosθ = 1 は最大）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 T = NIAB（コイル面が磁界に平行なとき cosθ = 1 は最大）\n【代入】 T = 630 × 0.540 × 0.003 × 0.8\n【計算】 T = 630 × 0.540 × 0.0024 = 0.816\n【答え】 0.816 N･m",
    "tags": [
      "第2章電流と磁気",
      "2-2方形コイルに働くトルク"
    ],
    "numeric_answer": 0.816,
    "numeric_unit": "N･m",
    "numeric_tolerance_abs": 0.016319999999999998,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 54,
    "category": "第2章 電流と磁気",
    "chapter": "2-2方形コイルに働くトルク",
    "difficulty": 1,
    "text": "下図で磁束密度B=1T、電流I=12A、コイルの面積0.1m^2、巻数N=440、磁界の向きに対してコイルの面がなす角が14°のとき、コイルに働くトルクT[N･m]を求めよ。\n\n【ヒント】 T = NIAB cosθ，θはコイル面法線と磁界のなす角，コイル面と磁界のなす角14° → 法線と磁界の角 = 90°-14° = 76°",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 T = NIAB cosθ，θはコイル面法線と磁界のなす角，コイル面と磁界のなす角14° → 法線と磁界の角 = 90°-14° = 76°\n【代入】 T = 440 × 12 × 0.1 × 1 × cos76°\n【計算】 T = 528 × 0.2419 = 512（注: cos76° = sin14°  = 0.2419）\n【答え】 512 N･m",
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
    "chapter": "2-2方形コイルに働くトルク",
    "difficulty": 1,
    "text": "上図で磁束密度B=2T、電流I=6A、コイルの面積0.7m^2、磁界の向きに対してコイルの面がなす角が50°のとき、コイルに働くトルクTが431N･mであった。コイルの巻数Nを求めよ。\n\n【ヒント】 T = NIAB cosθ，コイル面と磁界のなす角50° → θ = 90°-50° = 40°，N = T / (IAB cosθ)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 T = NIAB cosθ，コイル面と磁界のなす角50° → θ = 90°-50° = 40°，N = T / (IAB cosθ)\n【代入】 N = 431 / (6 × 0.7 × 2 × cos40°)\n【計算】 N = 431 / (8.4 × 0.766) = 431 / 6.43 ≈ 79.8\n【答え】 79.8 回",
    "tags": [
      "第2章電流と磁気",
      "2-2方形コイルに働くトルク"
    ],
    "numeric_answer": 79.8,
    "numeric_unit": "回",
    "numeric_tolerance_abs": 1.596,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 56,
    "category": "第2章 電流と磁気",
    "chapter": "2-3平行な直線状導体間に働く力",
    "difficulty": 1,
    "text": "下図の導体①、②に流れる電流はどちらも0.3Aであり、①、②の間隔は2mmであるとする。導体1mあたりに働く力の大きさf[N/m]と、導体1cmあたりに働く力の大きさf'[N/cm]をそれぞれ求めよ。\n\n【ヒント】 f = μ0 × I1 × I2 / (2πd)，μ0 = 4π×10⁻⁷",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f = μ0 × I1 × I2 / (2πd)，μ0 = 4π×10⁻⁷\n【代入】 f = 4π×10⁻⁷ × 0.3 × 0.3 / (2π × 0.002)\n【計算】 f = 4π×10⁻⁷ × 0.09 / (4π×10⁻³) = 0.09×10⁻⁷/10⁻³ = 9×10⁻⁶ N/m\n【答え】 9×10⁻⁶ N/m",
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
    "chapter": "2-3平行な直線状導体間に働く力",
    "difficulty": 1,
    "text": "下図のような、長さ1mの平行電線に13Aの電流が流れており、電線の間隔が9mmであるとする。電線に働く力の大きさf[N]を求めよ。\n\n【ヒント】 f = μ0 × I² × l / (2πd)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f = μ0 × I² × l / (2πd)\n【代入】 f = 4π×10⁻⁷ × 13² × 1 / (2π × 0.009)\n【計算】 f = 4π×10⁻⁷ × 169 / (0.018π) = 4 × 169×10⁻⁷ / 0.018 = 6.76×10⁻⁵ / 0.018 ≈ 3.76×10⁻³ N\n【答え】 約 3.76×10⁻³ N",
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
    "chapter": "2-3平行な直線状導体間に働く力",
    "difficulty": 1,
    "text": "2本の導体が、間隔3mmで、平行におかれている。それぞれに電流0.7Aを同じ向きに流した。導体39cmあたりに働く力の大きさf[N]を求めよ。\n\n【ヒント】 f = μ0 × I² × l / (2πd)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f = μ0 × I² × l / (2πd)\n【代入】 f = 4π×10⁻⁷ × 0.7² × 0.39 / (2π × 0.003)\n【計算】 f = 4π×10⁻⁷ × 0.49 × 0.39 / (0.006π) = 4 × 0.1911×10⁻⁷ / 0.006 = 7.644×10⁻⁸ / 0.006 = 1.274×10⁻⁵ N\n【答え】 1.274×10⁻⁵ N",
    "tags": [
      "第2章電流と磁気",
      "2-3平行な直線状導体間に働く力"
    ],
    "numeric_answer": 1.274e-05,
    "numeric_unit": "N",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 59,
    "category": "第2章 電流と磁気",
    "chapter": "3-1環状鉄心の磁気回路1",
    "difficulty": 1,
    "text": "磁路の長さl=1.2m、磁路の断面積A=0.03m^2、鉄心の透磁率μ=14E-03H/mであるとき、この回路の磁気抵抗Rm[H^-1]を求めよ。\n\n【ヒント】 Rm = l / (μA)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Rm = l / (μA)\n【代入】 Rm = 1.2 / (14×10⁻³ × 0.03)\n【計算】 Rm = 1.2 / (4.2×10⁻⁴) = 2857 ≈ 2860\n【答え】 2860 H⁻¹",
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
    "chapter": "3-1環状鉄心の磁気回路1",
    "difficulty": 1,
    "text": "巻数1110のコイルに、電流0.6Aを流すときの起磁力NI[A]を求めよ。また、巻数16のコイルで、これと同じ起磁力を生じさせるには、何アンペアの電流を流せばよいか。\n\n【ヒント】 起磁力 NI = N × I，次に I = NI / N2",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 起磁力 NI = N × I，次に I = NI / N2\n【代入】 NI = 1110 × 0.6 = 666 A，I2 = 666 / 16\n【計算】 I2 = 41.6 A\n【答え】 NI = 666 A，I = 41.6 A",
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
    "chapter": "3-1環状鉄心の磁気回路1",
    "difficulty": 1,
    "text": "磁路の長さl=2m、鉄心の断面積A=39cm^2、コイルの巻数N=2200、磁束Φ=5E-03Wb、磁気抵抗Rm=4E+06H^-1の磁気回路がある。鉄心の透磁率μ[H/m]を求めよ。また、回路に流れる電流I[A]を求めよ。\n\n【ヒント】 μ = l / (Rm × A)，NI = Φ × Rm → I = Φ × Rm / N",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 μ = l / (Rm × A)，NI = Φ × Rm → I = Φ × Rm / N\n【代入】 μ = 2 / (4×10⁶ × 39×10⁻⁴)，I = 5×10⁻³ × 4×10⁶ / 2200\n【計算】 μ = 2 / 15600 = 1.28×10⁻⁴ H/m，I = 20000 / 2200 = 9.09 A\n【答え】 μ ≈ 1.28×10⁻⁴ H/m，I = 9.09 A",
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
    "chapter": "3-1環状鉄心の磁気回路2",
    "difficulty": 1,
    "text": "コイルの巻数が180、磁気抵抗が7E+04H^-1の磁気回路に、3E-02Wbの磁束を通すために必要な電流I[A]を求めよ。\n\n【ヒント】 NI = Φ × Rm → I = Φ × Rm / N",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 NI = Φ × Rm → I = Φ × Rm / N\n【代入】 I = 3×10⁻² × 7×10⁴ / 180\n【計算】 I = 2100 / 180 = 11.7\n【答え】 11.7 A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路2"
    ],
    "numeric_answer": 11.7,
    "numeric_unit": "A ② NI= 15200 A",
    "numeric_tolerance_abs": 0.23399999999999999,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 63,
    "category": "第2章 電流と磁気",
    "chapter": "3-1環状鉄心の磁気回路3",
    "difficulty": 1,
    "text": "上図においてコイルの巻数5900、磁路の長さ2.8m、比透磁率530、磁路の断面積3E-04m^2、磁束3.8E-06Wbのときの電流I[A]を求めよ。\n\n【ヒント】 μ = μ0 × μr，Rm = l / (μA)，I = Φ × Rm / N",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 μ = μ0 × μr，Rm = l / (μA)，I = Φ × Rm / N\n【代入】 μ = 4π×10⁻⁷ × 530 = 6.66×10⁻⁴ H/m，Rm = 2.8 / (6.66×10⁻⁴ × 3×10⁻⁴) = 1.401×10⁷ H⁻¹\n【計算】 I = 3.8×10⁻⁶ × 1.401×10⁷ / 5900 = 53.2 / 5900 = 0.00902 A\n【答え】 0.00902 A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路3"
    ],
    "numeric_answer": 0.00902573603293,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.00018051472065860002,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 64,
    "category": "第2章 電流と磁気",
    "chapter": "3-1環状鉄心の磁気回路3",
    "difficulty": 1,
    "text": "上図において、磁路の長さ1.4m、コイルの巻数15000、電流9Aのとき、磁界の大きさH[A/m]を求めよ。\n\n【ヒント】 H = NI / l（環状コイルの磁界）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 H = NI / l（環状コイルの磁界）\n【代入】 H = 15000 × 9 / 1.4\n【計算】 H = 135000 / 1.4 = 96429 ≈ 96400\n【答え】 96400 A/m",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路3"
    ],
    "numeric_answer": 96400.0,
    "numeric_unit": "A/m",
    "numeric_tolerance_abs": 1928.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 65,
    "category": "第2章 電流と磁気",
    "chapter": "3-1環状鉄心の磁気回路4",
    "difficulty": 1,
    "text": "下図に示す磁気回路について、次の各問いに答えよ。\n\n【ヒント】 Rm = l / (μA)，B = Φ / A",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Rm = l / (μA)，B = Φ / A\n【代入】 図の各寸法・透磁率を代入して各部のRmを求める\n【計算】 Rm1 = 319000 H⁻¹，B = 1.39 T\n【答え】 Rm1 = 319000 H⁻¹，B = 1.39 T",
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
    "chapter": "3-1環状鉄心の磁気回路4",
    "difficulty": 1,
    "text": "上図において、エアギャップの長さを8mm、鉄心の長さを1.1m、使用する鉄心を比透磁率290の鋳鉄とし、磁束密度を0.9Tにしたい。コイルの巻数が1400であれば、何アンペアの電流を流せばよいか。\n\n【ヒント】 NI = H_fe × l_fe + H_ag × l_ag，H = B/μ",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 NI = H_fe × l_fe + H_ag × l_ag，H = B/μ\n【代入】 H_fe = 0.9/(290 × 4π×10⁻⁷) = 2469 A/m，H_ag = 0.9/(4π×10⁻⁷) = 716197 A/m\n【計算】 NI = 2469×1.1 + 716197×0.008 = 2716 + 5730 = 8446 A，I = 8446/1400 = 6.03\n【答え】 6.03 A",
    "tags": [
      "第2章電流と磁気",
      "3-1環状鉄心の磁気回路4"
    ],
    "numeric_answer": 6.03,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.12060000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 67,
    "category": "第2章 電流と磁気",
    "chapter": "4-1電磁誘導",
    "difficulty": 1,
    "text": "下図において、コイルの巻数が490であるとする。コイルを貫く磁束が、2msの間に1E-03Wbだけ増加すると、この2msの間に磁束鎖交数[Wb]はどれだけ変化するか。また、このときコイルに発生する誘導起電力e[V]の大きさを求めよ。\n\n【ヒント】 ΔΨ = N × ΔΦ，e = ΔΨ / Δt",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 ΔΨ = N × ΔΦ，e = ΔΨ / Δt\n【代入】 ΔΨ = 490 × 1×10⁻³ = 0.49 Wb，e = 0.49 / (2×10⁻³)\n【計算】 e = 0.49 / 0.002 = 245 V\n【答え】 ΔΨ = 0.49 Wb，e = 245 V",
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
    "chapter": "4-1電磁誘導",
    "difficulty": 1,
    "text": "下図のように、磁束密度0.1Tの平等磁界中に長さ77cmの導体を置き、これを速度85cm/sで動かしたとき、導体に発生する誘導起電力の大きさｅ[ｍV]を求めよ。\n\n【ヒント】 e = Blv（磁界に垂直に運動する場合 sinθ = 1）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = Blv（磁界に垂直に運動する場合 sinθ = 1）\n【代入】 e = 0.1 × 0.77 × 0.85\n【計算】 e = 0.0655 V = 65.5 mV\n【答え】 65.5 mV",
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
    "chapter": "4-1電磁誘導",
    "difficulty": 1,
    "text": "下図のように、磁束密度0.7Tの平等磁界中に長さ12cmの導体を置き、これを磁界に対してなす角が74°の向きに速度47cm/sで動かした。このとき導体に発生する誘導起電力の大きさｅ[mV]を求めよ。\n\n【ヒント】 e = Blv sinθ",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = Blv sinθ\n【代入】 e = 0.7 × 0.12 × 0.47 × sin74°\n【計算】 e = 0.7 × 0.12 × 0.47 × 0.9613 = 0.0380 V = 38 mV\n【答え】 38 mV",
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
    "chapter": "4-1電磁誘導",
    "difficulty": 2,
    "text": "上図において、磁界に対してなす角度を30°としたとき、導体に発生する誘導起電力が1Vになった。このときの磁束密度B[T]を求めよ。ただし、導体の長さと動かす速度は変わらないものとする。\n\n【ヒント】 e = Blv sinθ → B = e / (lv sinθ)，l = 0.12 m，v = 0.47 m/s（前問と同じ）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = Blv sinθ → B = e / (lv sinθ)，l = 0.12 m，v = 0.47 m/s（前問と同じ）\n【代入】 B = 1 / (0.12 × 0.47 × sin30°)\n【計算】 B = 1 / (0.12 × 0.47 × 0.5) = 1 / 0.0282 = 35.5\n【答え】 35.5 T",
    "tags": [
      "第2章電流と磁気",
      "4-1電磁誘導"
    ],
    "numeric_answer": 35.5,
    "numeric_unit": "T",
    "numeric_tolerance_abs": 0.71,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 71,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス1",
    "difficulty": 1,
    "text": "コイルに流れる電流が、8msの間に0.4A変化するとき、4Vの誘導起電力が生じるとして、自己インダクタンスL[mH]はいくらか。\n\n【ヒント】 e = L × ΔI/Δt → L = e × Δt / ΔI",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = L × ΔI/Δt → L = e × Δt / ΔI\n【代入】 L = 4 × (8×10⁻³) / 0.4\n【計算】 L = 0.032 / 0.4 = 0.08 H = 80 mH\n【答え】 80 mH",
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
    "chapter": "4-2インダクタンス1",
    "difficulty": 1,
    "text": "自己インダクタンス0.2Hのコイルに流れる電流が、0.4msの間に0.7A変化した。コイルに発生する誘導起電力の大きさｅ[V]を求めよ。\n\n【ヒント】 e = L × ΔI / Δt",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = L × ΔI / Δt\n【代入】 e = 0.2 × 0.7 / (0.4×10⁻³)\n【計算】 e = 0.14 / 4×10⁻⁴ = 350\n【答え】 350 V",
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
    "chapter": "4-2インダクタンス1",
    "difficulty": 1,
    "text": "あるコイルに流れる電流が、0.2msの間に2A変化したとき、27Vの誘導起電力が生じた。自己インダクタンスL[mH]を求めよ。\n\n【ヒント】 L = e × Δt / ΔI",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 L = e × Δt / ΔI\n【代入】 L = 27 × (0.2×10⁻³) / 2\n【計算】 L = 27 × 10⁻⁴ = 2.7×10⁻³ H = 2.7 mH\n【答え】 2.7 mH",
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
    "chapter": "4-2インダクタンス2",
    "difficulty": 1,
    "text": "下図の磁気回路で、磁路の断面積A=3E-04m^2、磁路の長さl=0.8m、コイルの巻数N=1100、比透磁率μr=940とすると、自己インダクタンスL[H]はいくらになるか。\n\n【ヒント】 L = μ0 × μr × N² × A / l",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 L = μ0 × μr × N² × A / l\n【代入】 μ = 4π×10⁻⁷ × 940 = 1.181×10⁻³，L = 1.181×10⁻³ × 1100² × 3×10⁻⁴ / 0.8\n【計算】 L = 1.181×10⁻³ × 1210000 × 3×10⁻⁴ / 0.8 = 0.4288 / 0.8 = 0.536\n【答え】 0.536 H",
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
    "chapter": "4-2インダクタンス2",
    "difficulty": 1,
    "text": "環状鉄心に巻いたコイルの巻数が820のとき、自己インダクタンスLは3mHである。このコイルの巻数が1230のとき、自己インダクタンスL[mH]を求めよ。\n\n【ヒント】 L ∝ N²，L2 / L1 = (N2 / N1)²",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 L ∝ N²，L2 / L1 = (N2 / N1)²\n【代入】 L2 = 3 × (1230/820)²\n【計算】 L2 = 3 × (1.5)² = 3 × 2.25 = 6.75\n【答え】 6.75 mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 6.75,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.135,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 76,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス2",
    "difficulty": 1,
    "text": "上図で、磁路の断面積A=1E-04m^2、磁路の長さl=0.5m、コイルの巻数N=250、比透磁率μr=370であるとき、自己インダクタンスL[mH]を求めよ。\n\n【ヒント】 L = μ0 × μr × N² × A / l",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 L = μ0 × μr × N² × A / l\n【代入】 μ = 4π×10⁻⁷ × 370 = 4.65×10⁻⁴，L = 4.65×10⁻⁴ × 250² × 1×10⁻⁴ / 0.5\n【計算】 L = 4.65×10⁻⁴ × 62500 × 10⁻⁴ / 0.5 = 2.906×10⁻³ / 0.5 × 2 ≈ 5.81×10⁻³ H = 5.81 mH\n【答え】 5.81 mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 5.81,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.1162,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 77,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス2",
    "difficulty": 2,
    "text": "上図で、磁路の断面積が8E-04m^2、磁路の長さが0.4m、コイルの巻数が1860のとき、自己インダクタンスが4Hである。磁気回路の比透磁率μrを求めよ。\n\n【ヒント】 L = μ0 × μr × N² × A / l → μr = L × l / (μ0 × N² × A)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 L = μ0 × μr × N² × A / l → μr = L × l / (μ0 × N² × A)\n【代入】 μr = 4 × 0.4 / (4π×10⁻⁷ × 1860² × 8×10⁻⁴)\n【計算】 μr = 1.6 / (4π×10⁻⁷ × 3459600 × 8×10⁻⁴) = 1.6 / 3.478×10⁻³ = 460\n【答え】 460",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス2"
    ],
    "numeric_answer": 460.0,
    "numeric_unit": "",
    "numeric_tolerance_abs": 9.200000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 78,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス3",
    "difficulty": 1,
    "text": "下図で、一次コイルの電流I1が、0.1msの間に0.1A変化したとき、二次コイルに誘導起電力9V発生したという。相互インダクタンスM[mH]を求めよ。\n\n【ヒント】 e2 = M × ΔI1/Δt → M = e2 × Δt / ΔI1",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e2 = M × ΔI1/Δt → M = e2 × Δt / ΔI1\n【代入】 M = 9 × (0.1×10⁻³) / 0.1\n【計算】 M = 9×10⁻⁴ / 0.1 = 9×10⁻³ H = 9 mH\n【答え】 9 mH",
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
    "chapter": "4-2インダクタンス3",
    "difficulty": 1,
    "text": "上図で、相互インダクタンスMが128mHであるという。一次コイルの電流I1が,14msの間に8A変化したとき、二次コイルに発生する誘導起電力の大きさe[V]を求めよ。\n\n【ヒント】 e2 = M × ΔI1 / Δt",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e2 = M × ΔI1 / Δt\n【代入】 e2 = 128×10⁻³ × 8 / (14×10⁻³)\n【計算】 e2 = 1.024 / 0.014 = 73.1\n【答え】 73.1 V",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 73.1,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 1.462,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 80,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス3",
    "difficulty": 1,
    "text": "上図で、一次コイル、二次コイルの巻数をN1=1030、N2=2050、比透磁率μr=544、磁路の断面積A=6E-03m^2、磁路の長さl=0.4mとしたときの相互インダクタンスM[H]を求めよ。\n\n【ヒント】 M = μ0 × μr × N1 × N2 × A / l",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 M = μ0 × μr × N1 × N2 × A / l\n【代入】 μ = 4π×10⁻⁷ × 544 = 6.838×10⁻⁴，M = 6.838×10⁻⁴ × 1030 × 2050 × 6×10⁻³ / 0.4\n【計算】 M = 6.838×10⁻⁴ × 1030 × 2050 × 6×10⁻³ / 0.4 = 8.675 / 0.4 = 21.7\n【答え】 21.7 H",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 21.7,
    "numeric_unit": "H",
    "numeric_tolerance_abs": 0.434,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 81,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス3",
    "difficulty": 2,
    "text": "上図で、一次コイル、二次コイルの巻数がそれぞれ、91,207のとき、相互インダクタンスが110mHであった。コイルの巻数がそれぞれ156,247のときの相互インダクタンスM[mH]を求めよ。\n\n【ヒント】 M ∝ N1 × N2，M2 = M1 × (N1_new × N2_new) / (N1_old × N2_old)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 M ∝ N1 × N2，M2 = M1 × (N1_new × N2_new) / (N1_old × N2_old)\n【代入】 M2 = 110 × (156 × 247) / (91 × 207)\n【計算】 M2 = 110 × 38532 / 18837 = 110 × 2.046 = 225\n【答え】 225 mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス3"
    ],
    "numeric_answer": 225.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 4.5,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 82,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス4",
    "difficulty": 1,
    "text": "下図で、一次コイルの自己インダクタンスL1=5mH、二次コイルの自己インダクタンスL2=11mHであるという。相互インダクタンスM[mH]を求めよ。\n\n【ヒント】 M = k√(L1 × L2)，完全結合（k = 1）の場合",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 M = k√(L1 × L2)，完全結合（k = 1）の場合\n【代入】 M = 1 × √(5 × 11)\n【計算】 M = √55 = 7.42\n【答え】 7.42 mH",
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
    "chapter": "4-2インダクタンス4",
    "difficulty": 1,
    "text": "上図で、一次コイルの巻数N1=720,二次コイルの巻数N2=1790,一次コイルの自己インダクタンスL1=216mHであるという。二次コイルの自己インダクタンスL2[mH]および相互インダクタンスM[mH]を求めよ。\n\n【ヒント】 L ∝ N²，L2 = L1 × (N2/N1)²，M = √(L1 × L2)（完全結合）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 L ∝ N²，L2 = L1 × (N2/N1)²，M = √(L1 × L2)（完全結合）\n【代入】 L2 = 216 × (1790/720)²\n【計算】 L2 = 216 × (2.486)² = 216 × 6.18 = 1335 ≈ 1340 mH\n【答え】 L2 = 1340 mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス4"
    ],
    "numeric_answer": 2.0,
    "numeric_unit": "= 1340mH",
    "numeric_tolerance_abs": 0.04,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 84,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス4",
    "difficulty": 1,
    "text": "下図において、一次コイル、二次コイルの自己インダクタンスがL1=45mH、L2=210mH、結合係数ｋが0.6のときの相互インダクタンスM[mH]を求めよ。\n\n【ヒント】 M = k × √(L1 × L2)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 M = k × √(L1 × L2)\n【代入】 M = 0.6 × √(45 × 210)\n【計算】 M = 0.6 × √9450 = 0.6 × 97.2 = 58.3\n【答え】 58.3 mH",
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
    "chapter": "4-2インダクタンス4",
    "difficulty": 2,
    "text": "上図において、一次コイル、二次コイルの自己インダクタンスがL1=9μH、L2=71μH、相互インダクタンスM=18μHであるという。結合係数kを求めよ。\n\n【ヒント】 M = k × √(L1 × L2) → k = M / √(L1 × L2)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 M = k × √(L1 × L2) → k = M / √(L1 × L2)\n【代入】 k = 18 / √(9 × 71)\n【計算】 k = 18 / √639 = 18 / 25.28 = 0.712\n【答え】 0.712",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス4"
    ],
    "numeric_answer": 0.712,
    "numeric_unit": "",
    "numeric_tolerance_abs": 0.01424,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 86,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス5",
    "difficulty": 1,
    "text": "下図において、一次コイルの自己インダクタンスL1=20mH、二次コイルの自己インダクタンスL2=43mH、相互インダクタンスM=7mHである。端子①－④間の合成自己インダクタンスL[mH]を求めよ。\n\n【ヒント】 和動接続: L = L1 + L2 + 2M",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 和動接続: L = L1 + L2 + 2M\n【代入】 L = 20 + 43 + 2 × 7\n【計算】 L = 63 + 14 = 77\n【答え】 77 mH",
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
    "chapter": "4-2インダクタンス5",
    "difficulty": 1,
    "text": "二つのコイルが差動接続されている。自己インダクタンスL1=13mH、自己インダクタンスL2=10mH、相互インダクタンスM=3mHのときの全体の自己インダクタンスL[mH]を求めよ。\n\n【ヒント】 差動接続: L = L1 + L2 - 2M",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 差動接続: L = L1 + L2 - 2M\n【代入】 L = 13 + 10 - 2 × 3\n【計算】 L = 23 - 6 = 17\n【答え】 17 mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス5"
    ],
    "numeric_answer": 17.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 0.34,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 88,
    "category": "第2章 電流と磁気",
    "chapter": "4-2インダクタンス5",
    "difficulty": 1,
    "text": "二つのコイルが和動接続されている。自己インダクタンスL1=14mH、L2=10mHのとき、全体の自己インダクタンスLが130mHであった。相互インダクタンスM[mH]を求めよ。\n\n【ヒント】 和動接続: L = L1 + L2 + 2M → M = (L - L1 - L2) / 2",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 和動接続: L = L1 + L2 + 2M → M = (L - L1 - L2) / 2\n【代入】 M = (130 - 14 - 10) / 2\n【計算】 M = 106 / 2 = 53\n【答え】 53 mH",
    "tags": [
      "第2章電流と磁気",
      "4-2インダクタンス5"
    ],
    "numeric_answer": 53.0,
    "numeric_unit": "mH",
    "numeric_tolerance_abs": 1.06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 89,
    "category": "第2章 電流と磁気",
    "chapter": "4-3電磁エネルギー",
    "difficulty": 1,
    "text": "自己インダクタンス8Hのコイルに、110mAの電流が流れている。このコイルに蓄えられる電磁エネルギーW[J]を求めよ。\n\n【ヒント】 W = L × I² / 2",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 W = L × I² / 2\n【代入】 W = 8 × (110×10⁻³)² / 2\n【計算】 W = 8 × 0.0121 / 2 = 0.0968 / 2 = 0.0484\n【答え】 0.0484 J",
    "tags": [
      "第2章電流と磁気",
      "4-3電磁エネルギー"
    ],
    "numeric_answer": 0.0484,
    "numeric_unit": "J",
    "numeric_tolerance_abs": 0.000968,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 90,
    "category": "第2章 電流と磁気",
    "chapter": "4-3電磁エネルギー",
    "difficulty": 1,
    "text": "インダクタンス200mHのコイルに66.7Jのエネルギーを蓄えたい。コイルに流す電流I[A]を求めよ。\n\n【ヒント】 W = LI²/2 → I = √(2W/L)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 W = LI²/2 → I = √(2W/L)\n【代入】 I = √(2 × 66.7 / 0.2)\n【計算】 I = √667 = 25.8\n【答え】 25.8 A",
    "tags": [
      "第2章電流と磁気",
      "4-3電磁エネルギー"
    ],
    "numeric_answer": 25.8,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.516,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 91,
    "category": "第2章 電流と磁気",
    "chapter": "4-3電磁エネルギー",
    "difficulty": 1,
    "text": "下図の磁気回路において、磁束密度B=0.4T、磁路の断面積A=3E-04m^2、磁路の長さl=0.3m、比透磁率μr=300である。この磁気回路全体に蓄えられる電磁エネルギーW[mJ]を求めよ。\n\n【ヒント】 体積エネルギー密度 w = B² / (2μ)，W = w × V = w × A × l",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 体積エネルギー密度 w = B² / (2μ)，W = w × V = w × A × l\n【代入】 μ = 4π×10⁻⁷ × 300 = 3.77×10⁻⁴，w = 0.4² / (2 × 3.77×10⁻⁴) = 0.16 / 7.54×10⁻⁴ = 212.2 J/m³\n【計算】 W = 212.2 × 3×10⁻⁴ × 0.3 = 212.2 × 9×10⁻⁵ = 0.0191 J = 19.1 mJ\n【答え】 19.1 mJ",
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
    "chapter": "4-3電磁エネルギー",
    "difficulty": 2,
    "text": "下図の磁気回路で、磁界の大きさHが690A/m、比透磁率μrが460の場合、1m^3あたりの磁界に蓄えられている電磁エネルギーω[J/m^3]を求めよ。\n\n【ヒント】 w = μ0 × μr × H² / 2",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 w = μ0 × μr × H² / 2\n【代入】 w = 4π×10⁻⁷ × 460 × 690² / 2\n【計算】 μ0μr = 5.78×10⁻⁴，w = 5.78×10⁻⁴ × 476100 / 2 = 275.2 / 2 = 137.5 ≈ 138\n【答え】 138 J/m³",
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
    "chapter": "1-1静電現象のあらまし",
    "difficulty": 1,
    "text": "真空中に5μCと3μCの正の電荷が40cm離れて置かれている。このとき、両電荷間に働く静電力の大きさF[N]を求めよ。また、その力は反発力か吸引力か。\n\n【ヒント】 F = k × Q1 × Q2 / r²，k = 9×10⁹ N･m²/C²",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = k × Q1 × Q2 / r²，k = 9×10⁹ N･m²/C²\n【代入】 F = 9×10⁹ × 5×10⁻⁶ × 3×10⁻⁶ / 0.4²\n【計算】 F = 9×10⁹ × 15×10⁻¹² / 0.16 = 135×10⁻³ / 0.16 = 0.844 N（同符号→反発力）\n【答え】 0.844 N（反発力）",
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
    "chapter": "1-1静電現象のあらまし",
    "difficulty": 1,
    "text": "真空中において、Q1=9E-06CとQ2=-19E-06Cの点電荷が5cmの距離にある。これらの間に働く静電力の大きさF[N]を求めよ。また、その力は反発力か吸引力か。\n\n【ヒント】 F = k × Q1 × Q2 / r²，異符号 → 吸引力",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = k × Q1 × Q2 / r²，異符号 → 吸引力\n【代入】 F = 9×10⁹ × 9×10⁻⁶ × (-19×10⁻⁶) / 0.05²\n【計算】 F = 9×10⁹ × (-171×10⁻¹²) / 0.0025 = -1539×10⁻³ / 0.0025 = -616 N（吸引力）\n【答え】 616 N（吸引力）",
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
    "chapter": "1-1静電現象のあらまし",
    "difficulty": 1,
    "text": "空気中において、ある正電荷と3×E-06Cの電荷が11cm離れて置かれているとき、電荷間に3.6Nの反発力が働いた。正電荷の大きさ[μC]を求めよ。\n\n【ヒント】 F = k × Q1 × Q2 / r² → Q1 = F × r² / (k × Q2)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 F = k × Q1 × Q2 / r² → Q1 = F × r² / (k × Q2)\n【代入】 Q1 = 3.6 × 0.11² / (9×10⁹ × 3×10⁻⁶)\n【計算】 Q1 = 3.6 × 0.0121 / 27000 = 0.04356 / 27000 = 1.61×10⁻⁶ C = 1.61 μC\n【答え】 1.61 μC",
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
    "chapter": "1-2電界と電界の強さ",
    "difficulty": 1,
    "text": "空気中に置かれた5μCの電荷から4cm離れた点の電界の大きさE[V/m]を求めよ。\n\n【ヒント】 E = k × Q / r²，k = 9×10⁹",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 E = k × Q / r²，k = 9×10⁹\n【代入】 E = 9×10⁹ × 5×10⁻⁶ / 0.04²\n【計算】 E = 45000 / 0.0016 = 28125000 V/m\n【答え】 28125000 V/m（≈ 2.81×10⁷ V/m）",
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
    "chapter": "1-2電界と電界の強さ",
    "difficulty": 1,
    "text": "真空中において、ある点電荷から5cm離れた点の電界の大きさを求めたところ、3.3E+06V/mであった。この点電荷Q[μC]を求めよ。\n\n【ヒント】 E = k × Q / r² → Q = E × r² / k",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 E = k × Q / r² → Q = E × r² / k\n【代入】 Q = 3.3×10⁶ × 0.05² / (9×10⁹)\n【計算】 Q = 3.3×10⁶ × 0.0025 / 9×10⁹ = 8250 / 9×10⁹ = 9.17×10⁻⁷ C = 0.917 μC\n【答え】 0.917 μC",
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
    "chapter": "1-2電界と電界の強さ",
    "difficulty": 1,
    "text": "空気中において、5μCの電荷に0.2Nの静電力が働く点の電界の大きさE[V/m]を求めよ。\n\n【ヒント】 E = F / Q",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 E = F / Q\n【代入】 E = 0.2 / (5×10⁻⁶)\n【計算】 E = 40000\n【答え】 40000 V/m",
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
    "chapter": "1-2電界と電界の強さ",
    "difficulty": 2,
    "text": "2枚の平行金属板間の距離を9cm、電界の大きさを300V/mとしたとき、この両板間の電位差V[V]を求めよ。\n\n【ヒント】 V = E × d（平行板間電位差）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 V = E × d（平行板間電位差）\n【代入】 V = 300 × 0.09\n【計算】 V = 27\n【答え】 27 V",
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
    "chapter": "1-2電界と電界の強さ",
    "difficulty": 2,
    "text": "誘電率ε=0.14μF/mの物質中に点電荷を置いたとき、ある点の電界の大きさが28V/mとなった。この点の電束密度D[μC/m^2]を求めよ。\n\n【ヒント】 D = ε × E",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 D = ε × E\n【代入】 D = 0.14×10⁻⁶ × 28\n【計算】 D = 3.92×10⁻⁶ C/m² = 3.92 μC/m²\n【答え】 3.92 μC/m²",
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
    "chapter": "1-3電位と静電容量",
    "difficulty": 1,
    "text": "空気中にある点電荷から2m離れた点の電位が13kVであった。この点電荷Q[μC]を求めよ。\n\n【ヒント】 V = k × Q / r → Q = V × r / k",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 V = k × Q / r → Q = V × r / k\n【代入】 Q = 13000 × 2 / (9×10⁹)\n【計算】 Q = 26000 / 9×10⁹ = 2.89×10⁻⁶ C = 2.89 μC\n【答え】 2.89 μC",
    "tags": [
      "第3章静電気",
      "1-3電位と静電容量"
    ],
    "numeric_answer": 2.89,
    "numeric_unit": "μC",
    "numeric_tolerance_abs": 0.057800000000000004,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 102,
    "category": "第3章 静電気",
    "chapter": "1-3電位と静電容量",
    "difficulty": 1,
    "text": "下図において、点電荷Q=6μCから、点Aまでの距離が40cm、AB間の電位差VABが30kVであったとき、点Bまでの距離r2[cm]を求めよ。ただし、点電荷は空気中にあるものとする。\n\n【ヒント】 VA = kQ/r1，VB = VA - VAB，r2 = kQ/VB",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 VA = kQ/r1，VB = VA - VAB，r2 = kQ/VB\n【代入】 VA = 9×10⁹ × 6×10⁻⁶ / 0.4 = 135000 V，VB = 135000 - 30000 = 105000 V\n【計算】 r2 = 9×10⁹ × 6×10⁻⁶ / 105000 = 54000 / 105000 = 0.514 m = 51.4 cm\n【答え】 51.4 cm",
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
    "chapter": "1-3電位と静電容量",
    "difficulty": 1,
    "text": "海王星の半径は約25000kmである。海王星を導体とみなすときその静電容量C[μF]を求めよ。\n\n【ヒント】 C = 4π × ε0 × r，ε0 = 8.85×10⁻¹²，r = 25000 km = 2.5×10⁷ m",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 C = 4π × ε0 × r，ε0 = 8.85×10⁻¹²，r = 25000 km = 2.5×10⁷ m\n【代入】 C = 4π × 8.85×10⁻¹² × 2.5×10⁷\n【計算】 C = 4π × 8.85 × 2.5 × 10⁻⁵ = 4π × 22.125×10⁻⁵ ≈ 2780×10⁻⁶ F = 2780 μF\n【答え】 2780 μF",
    "tags": [
      "第3章静電気",
      "1-3電位と静電容量"
    ],
    "numeric_answer": 2780.0,
    "numeric_unit": "μF",
    "numeric_tolerance_abs": 55.6,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 104,
    "category": "第3章 静電気",
    "chapter": "2-1コンデンサの構造と静電容量",
    "difficulty": 1,
    "text": "面積26cm^2の2枚の金属板を、空気中で4.8mm離して平行に置いたときの静電容量C[pF]はいくらか。また、このコンデンサに電圧21Vを加えたとき、蓄えられる電荷Q[pC]はいくらか。ただし、ε0=8.85E-12F/mとする。\n\n【ヒント】 C = ε0 × A / d",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 C = ε0 × A / d\n【代入】 C = 8.85×10⁻¹² × 26×10⁻⁴ / (4.8×10⁻³)\n【計算】 C = 8.85×10⁻¹² × 0.5417×10³ = 4.79×10⁻¹² F = 4.79 pF\n【答え】 C = 4.79 pF，Q = 4.79 × 21 = 100.6 pC",
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
    "chapter": "2-1コンデンサの構造と静電容量",
    "difficulty": 1,
    "text": "半径12cmの円形金属板を空気中(ε0=8.85E-12F/m)に1cmの間隔で平行に置いたときの静電容量C[pF]を求めよ。\n\n【ヒント】 C = ε0 × A / d，A = π × r² = π × 0.12²",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 C = ε0 × A / d，A = π × r² = π × 0.12²\n【代入】 A = π × 0.0144 = 0.04524 m²，C = 8.85×10⁻¹² × 0.04524 / 0.01\n【計算】 C = 8.85×10⁻¹² × 4.524 = 40.0×10⁻¹² F = 40 pF\n【答え】 40 pF",
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
    "chapter": "2-1コンデンサの構造と静電容量",
    "difficulty": 1,
    "text": "平行板コンデンサの面積を6倍にし、さらに間隔を9/13倍にしたとき、静電容量はもとのコンデンサの何倍になるか。\n\n【ヒント】 C = ε0 × A / d，C_new/C_old = (A_new/A_old) × (d_old/d_new)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 C = ε0 × A / d，C_new/C_old = (A_new/A_old) × (d_old/d_new)\n【代入】 C_new/C_old = 6 × (1 / (9/13)) = 6 × 13/9\n【計算】 C_new/C_old = 78/9 = 8.67\n【答え】 8.67 倍",
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
    "chapter": "2-1コンデンサの構造と静電容量",
    "difficulty": 2,
    "text": "誘電率が6.52E-11F/mの誘電体の比誘電率εrを求めよ。\n\n【ヒント】 εr = ε / ε0，ε0 = 8.85×10⁻¹²",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 εr = ε / ε0，ε0 = 8.85×10⁻¹²\n【代入】 εr = 6.52×10⁻¹¹ / (8.85×10⁻¹²)\n【計算】 εr = 6.52 / 0.885 = 7.37\n【答え】 7.37",
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
    "chapter": "2-2コンデンサの接続",
    "difficulty": 1,
    "text": "電圧320Vに充電された11μFのコンデンサC1と、まったく充電されていない4μFのコンデンサC2がある。これらのコンデンサを並列に接続したとき、コンデンサの端子電圧V[V]を求めよ。\n\n【ヒント】 Q1 = C1 × V1，並列接続後 V = Q1 / (C1 + C2)（電荷保存）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Q1 = C1 × V1，並列接続後 V = Q1 / (C1 + C2)（電荷保存）\n【代入】 Q1 = 11×10⁻⁶ × 320 = 3520 μC，V = 3520 / (11 + 4)\n【計算】 V = 3520 / 15 = 235\n【答え】 235 V",
    "tags": [
      "第3章静電気",
      "2-2コンデンサの接続"
    ],
    "numeric_answer": 235.0,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 4.7,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 109,
    "category": "第3章 静電気",
    "chapter": "2-3誘電体内のエネルギー",
    "difficulty": 1,
    "text": "上図において、V=5600V、l=30mm、ε=3.74E-11F/mのとき、誘電体の単位体積あたりにたくわえられるエネルギーω[J/m^3]を求めよ。\n\n【ヒント】 E = V/d，w = ε × E² / 2",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 E = V/d，w = ε × E² / 2\n【代入】 E = 5600 / 0.03 = 186667 V/m，w = 3.74×10⁻¹¹ × 186667² / 2\n【計算】 w = 3.74×10⁻¹¹ × 3.484×10¹⁰ / 2 = 1.303 / 2 = 0.652\n【答え】 0.652 J/m³",
    "tags": [
      "第3章静電気",
      "2-3誘電体内のエネルギー"
    ],
    "numeric_answer": 0.652,
    "numeric_unit": "J/m^3 Q3= 840μC W= 25.2mJ",
    "numeric_tolerance_abs": 0.013040000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 110,
    "category": "第4章 交流回路",
    "chapter": "1-1正弦波交流",
    "difficulty": 1,
    "text": "下図において、磁束密度0.3T、コイルの回転軸方向の長さ25cm、コイルの運動速度130m/s、コイルの面が磁界に対してなす角度74°のとき、コイルに発生する起電力e[V]はいくらか。\n\n【ヒント】 e = Blv sinθ（コイル面と磁界がなす角θのとき，コイル両辺分で×2）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = Blv sinθ（コイル面と磁界がなす角θのとき，コイル両辺分で×2）\n【代入】 e = 2 × 0.3 × 0.25 × 130 × sin74° / 2（両辺の合計として計算）\n【計算】 e = 0.3 × 0.25 × 130 × sin74° = 9.75 × 0.9613 ≈ 18.7 V（コイル両辺の合計）\n【答え】 18.7 V",
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
    "chapter": "1-1正弦波交流",
    "difficulty": 1,
    "text": "周波数が105kHzのときの周期T[μs]を求めよ。\n\n【ヒント】 T = 1 / f",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 T = 1 / f\n【代入】 T = 1 / (105×10³)\n【計算】 T = 9.52×10⁻⁶ s = 9.52 μs\n【答え】 9.52 μs",
    "tags": [
      "第4章交流回路",
      "1-1正弦波交流"
    ],
    "numeric_answer": 9.52,
    "numeric_unit": "μS ③ 1000 ns ⑤ 1000 μs",
    "numeric_tolerance_abs": 0.19039999999999999,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 112,
    "category": "第4章 交流回路",
    "chapter": "1-2角周波数",
    "difficulty": 2,
    "text": "下図に示す交流起電力の周波数f[Hz]と角速度ω[rad/s]を求めよ。\n\n【ヒント】 f = 1/T，ω = 2πf",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f = 1/T，ω = 2πf\n【代入】 グラフより T = 0.25 s，f = 1/0.25 = 4 Hz\n【計算】 ω = 2π × 4 = 8π ≈ 25.1 rad/s\n【答え】 f = 4 Hz，ω = 25.1 rad/s",
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
    "chapter": "1-3交流の表し方",
    "difficulty": 1,
    "text": "最大値120Vの正弦波交流起電力の平均値Ea[V]を求めよ。\n\n【ヒント】 Ea = (2/π) × Em",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Ea = (2/π) × Em\n【代入】 Ea = (2/π) × 120\n【計算】 Ea = 240/π = 76.4\n【答え】 76.4 V",
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
    "chapter": "1-3交流の表し方",
    "difficulty": 1,
    "text": "平均値110Vの正弦波交流起電力の最大値Em[V]を求めよ。\n\n【ヒント】 Ea = (2/π) × Em → Em = (π/2) × Ea",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Ea = (2/π) × Em → Em = (π/2) × Ea\n【代入】 Em = (π/2) × 110\n【計算】 Em = 1.5708 × 110 = 172.8 ≈ 173\n【答え】 173 V",
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
    "chapter": "1-3交流の表し方",
    "difficulty": 1,
    "text": "実効値150Aの正弦波交流の最大値Im[A]を求めよ。\n\n【ヒント】 E = Em / √2 → Em = √2 × E",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 E = Em / √2 → Em = √2 × E\n【代入】 Im = √2 × 150\n【計算】 Im = 1.4142 × 150 = 212\n【答え】 212 A",
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
    "chapter": "1-3交流の表し方",
    "difficulty": 2,
    "text": "実効値110V、周波数60Hzおよび30Hzのとき、正弦波交流起電力の瞬時値e[V]をそれぞれ式で表せ。\n\n【ヒント】 e = Em × sin(ωt)，Em = √2 × E，ω = 2πf",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = Em × sin(ωt)，Em = √2 × E，ω = 2πf\n【代入】 Em = 110√2，60 Hzのとき ω = 2π×60 = 120π\n【計算】 e = 110√2 sin(120πt) V\n【答え】 60 Hzのとき e = 110√2 sin(120πt) [V]",
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
    "chapter": "1-3交流の表し方",
    "difficulty": 2,
    "text": "瞬時値e=200sin30πt(V)の交流起電力の最大値Em[V]、ピークピーク値Vpp[V]、平均値Va[V]、実効値E[V]、周波数f[Hz]、周期T[ms]を求めよ。\n\n【ヒント】 Em は係数，Vpp = 2Em，Va = (2/π)Em，E = Em/√2，ω = 2πf → f = ω/(2π)，T = 1/f",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Em は係数，Vpp = 2Em，Va = (2/π)Em，E = Em/√2，ω = 2πf → f = ω/(2π)，T = 1/f\n【代入】 Em = 200 V，ω = 30π → f = 30π/(2π) = 15 Hz，T = 1/15 ≈ 66.7 ms\n【計算】 Vpp = 400 V，Va = (2/π)×200 = 127 V，E = 200/√2 = 141 V\n【答え】 Em = 200 V，E = 141 V，f = 15 Hz，T = 66.7 ms",
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
    "chapter": "2-1位相差とベクトル",
    "difficulty": 1,
    "text": "e1=100√2sin(ωt-π/3)[V]とe2=50√2sin8(ωt＋π/9)[V]の正弦波交流起電力がある。 e1はe2に比べて、どれだけ位相が進んでいるか、または遅れているか。\n\n【ヒント】 位相差 = e1の位相 - e2の位相",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 位相差 = e1の位相 - e2の位相\n【代入】 e1の位相 = -π/3，e2の位相 = +π/9\n【計算】 位相差 = -π/3 - π/9 = -3π/9 - π/9 = -4π/9（負は遅れ）\n【答え】 e1はe2より 4π/9 rad 遅れ",
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
    "chapter": "2-1位相差とベクトル",
    "difficulty": 1,
    "text": "実効値130V、周波数40Hz、位相がπ/5[rad]遅れている正弦交流起電力の瞬時値e[V]を式で表せ。\n\n【ヒント】 e = Em sin(ωt - φ)，Em = √2 × E，ω = 2πf",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 e = Em sin(ωt - φ)，Em = √2 × E，ω = 2πf\n【代入】 Em = 130√2，ω = 2π × 40 = 80π，φ = π/5\n【計算】 e = 130√2 sin(80πt - π/5)\n【答え】 e = 130√2 sin(80πt - π/5) [V]",
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
    "chapter": "2-1位相差とベクトル",
    "difficulty": 1,
    "text": "下図においてベクトルA=(3,10)、ベクトルB=(8，5)である。ベクトルAとベクトルBの和のベクトルCの座標を求めよ。また、ベクトルCを極座標表示で表せ。\n\n【ヒント】 C = A + B（成分ごとに加算），|C| = √(Cx² + Cy²)，θ = arctan(Cy/Cx)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 C = A + B（成分ごとに加算），|C| = √(Cx² + Cy²)，θ = arctan(Cy/Cx)\n【代入】 C = (3+8, 10+5) = (11, 15)\n【計算】 |C| = √(11² + 15²) = √(121+225) = √346 = 18.6，θ = arctan(15/11) = 53.7°\n【答え】 C = (11, 15)，極座標 18.6∠53.7°",
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
    "chapter": "2-2R,L,C単独の回路",
    "difficulty": 1,
    "text": "電気コンロには抵抗線が入っている。周波数50Hz、150Vの電圧を加えると、9Aの電流が流れた。抵抗線の抵抗R[Ω]を求めよ。\n\n【ヒント】 R = V / I（抵抗は周波数に依存しない）",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 R = V / I（抵抗は周波数に依存しない）\n【代入】 R = 150 / 9\n【計算】 R = 16.7\n【答え】 16.7 Ω",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 16.7,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.334,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 122,
    "category": "第4章 交流回路",
    "chapter": "2-2R,L,C単独の回路",
    "difficulty": 1,
    "text": "下図においてインダクタンスLが4H、電流Iが4Aとすると、回路に加わっている電圧vの実効値V=100Vのときの角周波数ω[rad/s]を求めよ。\n\n【ヒント】 XL = ωL，V = XL × I → XL = V/I，ω = XL/L",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 XL = ωL，V = XL × I → XL = V/I，ω = XL/L\n【代入】 XL = 100/4 = 25 Ω，ω = 25/4\n【計算】 ω = 6.25\n【答え】 6.25 rad/s",
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
    "chapter": "2-2R,L,C単独の回路",
    "difficulty": 1,
    "text": "上図のインダクタンスLが46mHのとき、周波数fが50Hzおよび60Hzの交流に対する誘導性リアクタンスXL[Ω]をそれぞれ求めよ。\n\n【ヒント】 XL = ω × L = 2πf × L",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 XL = ω × L = 2πf × L\n【代入】 50 Hzのとき: XL = 2π × 50 × 46×10⁻³\n【計算】 XL = 2π × 2.3 = 14.5 Ω，60 Hzのとき: XL = 2π × 60 × 0.046 = 17.3 Ω\n【答え】 50 Hzのとき 14.5 Ω，60 Hzのとき 17.3 Ω",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 50.0,
    "numeric_unit": "Hzのとき 14.5Ω",
    "numeric_tolerance_abs": 1.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 124,
    "category": "第4章 交流回路",
    "chapter": "2-2R,L,C単独の回路",
    "difficulty": 2,
    "text": "コンデンサの静電容量Cが21μFのとき、周波数fが50Hzおよび60Hzの交流に対する容量性リアクタンスXC[Ω]を求めよ。\n\n【ヒント】 XC = 1 / (ωC) = 1 / (2πfC)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 XC = 1 / (ωC) = 1 / (2πfC)\n【代入】 50 Hzのとき: XC = 1 / (2π × 50 × 21×10⁻⁶)\n【計算】 XC = 1 / (6597×10⁻⁶) = 152 Ω，60 Hzのとき: XC = 1/(2π×60×21×10⁻⁶) = 126 Ω\n【答え】 50 Hzのとき 152 Ω，60 Hzのとき 126 Ω",
    "tags": [
      "第4章交流回路",
      "2-2R,L,C単独の回路"
    ],
    "numeric_answer": 50.0,
    "numeric_unit": "Hzのとき 152Ω",
    "numeric_tolerance_abs": 1.0,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 125,
    "category": "第4章 交流回路",
    "chapter": "2-2R,L,C単独の回路",
    "difficulty": 2,
    "text": "下図において、電圧300V、周波数60Hz、電流80mAであるという。容量性リアクタンスXC[kΩ]および静電容量C[μF]を求めよ。\n\n【ヒント】 XC = V / I，C = 1 / (2πf × XC)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 XC = V / I，C = 1 / (2πf × XC)\n【代入】 XC = 300 / (80×10⁻³) = 3750 Ω = 3.75 kΩ\n【計算】 C = 1 / (2π × 60 × 3750) = 1 / 1413717 = 7.07×10⁻⁷ F = 0.707 μF\n【答え】 XC = 3.75 kΩ，C = 0.707 μF",
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
    "chapter": "2-3直列回路1",
    "difficulty": 1,
    "text": "インピーダンスZ=64ΩのRL直列回路において、抵抗R＝13Ωであるときの誘導性リアクタンスXL[Ω]を求めよ。また、電流I=7Aのときの電圧V[V]を求めよ。\n\n【ヒント】 Z = √(R² + XL²) → XL = √(Z² - R²)，V = Z × I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + XL²) → XL = √(Z² - R²)，V = Z × I\n【代入】 XL = √(64² - 13²) = √(4096 - 169) = √3927，V = 64 × 7\n【計算】 XL = 62.7 Ω，V = 448 V\n【答え】 XL = 62.7 Ω，V = 448 V",
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
    "chapter": "2-3直列回路1",
    "difficulty": 1,
    "text": "RL直列回路に実効値410Vの電圧を加えたところ、15Aの電流が流れた。抵抗R[Ω]と誘導性リアクタンスXL[Ω]を求めよ。ただし、電圧と電流のインピーダンス角はπ/3[rad]とする。\n\n【ヒント】 Z = V/I，R = Z cosθ，XL = Z sinθ",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = V/I，R = Z cosθ，XL = Z sinθ\n【代入】 Z = 410/15 = 27.3 Ω，R = 27.3 × cos(π/3) = 27.3 × 0.5\n【計算】 R = 13.7 Ω，XL = 27.3 × sin(π/3) = 27.3 × 0.866 = 23.6 Ω\n【答え】 R = 13.7 Ω，XL = 23.6 Ω",
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
    "chapter": "2-3直列回路1",
    "difficulty": 1,
    "text": "抵抗16Ωと誘導性リアクタンス23Ωの直列回路のインピーダンズZ[Ω]およびインピーダンス角θ[rad]を求めよ。\n\n【ヒント】 Z = √(R² + XL²)，θ = arctan(XL/R)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + XL²)，θ = arctan(XL/R)\n【代入】 Z = √(16² + 23²) = √(256 + 529) = √785，θ = arctan(23/16)\n【計算】 Z = 28.0 Ω，θ = arctan(1.4375) = 0.961 rad\n【答え】 Z = 28.0 Ω，θ = 0.961 rad",
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
    "chapter": "2-3直列回路1",
    "difficulty": 2,
    "text": "抵抗23Ωと誘導性リアクタンス30Ωの直列回路に2Aの電流が流れたとき、この回路に加えた電圧V[V]を求めよ。\n\n【ヒント】 Z = √(R² + XL²)，V = Z × I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + XL²)，V = Z × I\n【代入】 Z = √(23² + 30²) = √(529 + 900) = √1429 = 37.8 Ω，V = 37.8 × 2\n【計算】 V = 75.6\n【答え】 75.6 V",
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
    "chapter": "2-3直列回路2",
    "difficulty": 1,
    "text": "インピーダンスZ=13ΩのRC直列回路において、容量性リアクタンスXC=5Ωであるとき、抵抗R[Ω]を求めよ。また、電流I=6Aのときの電圧V[V]を求めよ。\n\n【ヒント】 Z = √(R² + XC²) → R = √(Z² - XC²)，V = Z × I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + XC²) → R = √(Z² - XC²)，V = Z × I\n【代入】 R = √(13² - 5²) = √(169 - 25) = √144 = 12 Ω，V = 13 × 6\n【計算】 R = 12 Ω，V = 78 V\n【答え】 R = 12 Ω，V = 78 V",
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
    "chapter": "2-3直列回路2",
    "difficulty": 1,
    "text": "周波数4kHz、130Vの交流電圧をRC直列回路に加えた。R=7Ω、C=13/π[μF]としたとき、容量性リアクタンスXC[Ω]、および回路のインピーダンスZ[Ω]と流れる電流I[A]を求めよ。\n\n【ヒント】 XC = 1/(2πfC)，Z = √(R² + XC²)，I = V/Z",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 XC = 1/(2πfC)，Z = √(R² + XC²)，I = V/Z\n【代入】 XC = 1/(2π × 4000 × 13/π × 10⁻⁶) = 1/(8000 × 13 × 10⁻⁶) = 1/0.104 = 9.62 Ω\n【計算】 Z = √(7² + 9.62²) = √(49 + 92.5) = √141.5 = 11.9 Ω，I = 130/11.9 = 10.9 A\n【答え】 XC = 9.62 Ω，Z = 11.9 Ω，I = 10.9 A",
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
    "chapter": "2-3直列回路2",
    "difficulty": 1,
    "text": "抵抗30Ωと容量性リアクタンス29Ωの直列回路のインピーダンスZ[Ω]およびインピーダンス角θ[rad]を求めよ。\n\n【ヒント】 Z = √(R² + XC²)，θ = arctan(XC/R)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + XC²)，θ = arctan(XC/R)\n【代入】 Z = √(30² + 29²) = √(900 + 841) = √1741\n【計算】 Z = 41.7 Ω，θ = arctan(29/30) = arctan(0.967) = 0.769 rad\n【答え】 Z = 41.7 Ω，θ = 0.769 rad",
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
    "chapter": "2-3直列回路2",
    "difficulty": 2,
    "text": "抵抗20Ωと容量性リアクタンス15Ωの直列回路に115Vの交流電圧を加えたとき、この回路に流れる電流I[A]を求めよ。また、インピーダンス角θ[rad]を求めよ。\n\n【ヒント】 Z = √(R² + XC²)，I = V/Z，θ = arctan(XC/R)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + XC²)，I = V/Z，θ = arctan(XC/R)\n【代入】 Z = √(20² + 15²) = √(400 + 225) = √625 = 25 Ω，I = 115/25\n【計算】 I = 4.6 A，θ = arctan(15/20) = arctan(0.75) = 0.644 rad\n【答え】 I = 4.6 A，θ = 0.644 rad",
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
    "chapter": "2-3直列回路3",
    "difficulty": 1,
    "text": "誘導性のRLC直列回路において、インピーダンス角θ=0.3rad、抵抗R=5Ω、誘導性リアクタンスXL=17Ωである。この回路の容量性リアクタンスXC[Ω]を求めよ。\n\n【ヒント】 tan θ = (XL - XC) / R → XC = XL - R × tan θ",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 tan θ = (XL - XC) / R → XC = XL - R × tan θ\n【代入】 XC = 17 - 5 × tan(0.3)\n【計算】 XC = 17 - 5 × 0.3093 = 17 - 1.546 = 15.5\n【答え】 15.5 Ω",
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
    "chapter": "2-3直列回路3",
    "difficulty": 1,
    "text": "160Vの交流電圧を加えたRLC直列回路において、抵抗R=8Ω、誘導性リアクタンスXL=12Ω、容量性リアクタンスXC=34Ωとしたとき、インピーダンス角θ[rad]を求めよ。また、回路に流れる電流I[A]を求めよ。\n\n【ヒント】 Z = √(R² + (XL-XC)²)，θ = arctan(|XC-XL|/R)，I = V/Z",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 Z = √(R² + (XL-XC)²)，θ = arctan(|XC-XL|/R)，I = V/Z\n【代入】 XL-XC = 12-34 = -22，Z = √(8² + 22²) = √(64 + 484) = √548 = 23.4 Ω\n【計算】 θ = arctan(22/8) = arctan(2.75) = 1.22 rad，I = 160/23.4 = 6.84 A\n【答え】 θ = 1.22 rad，I = 6.84 A",
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
    "chapter": "2-3直列回路3",
    "difficulty": 1,
    "text": "RLC直列回路において、抵抗R=33Ω、コイルL=500H、コンデンサC=2.8μFとしたとき、この回路の共振周波数f0[Hz]を求めよ。\n\n【ヒント】 f0 = 1 / (2π√(LC))",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f0 = 1 / (2π√(LC))\n【代入】 f0 = 1 / (2π × √(500 × 2.8×10⁻⁶))\n【計算】 LC = 1.4×10⁻³，√LC = 0.03742，f0 = 1 / (2π × 0.03742) = 1 / 0.2352 = 4.25\n【答え】 4.25 Hz",
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
    "chapter": "2-3直列回路3",
    "difficulty": 2,
    "text": "共振周波数f0=380HzのRLC直列回路において、抵抗R=41Ω、インダクタンスL=44mHであるとき、この回路の静電容量C[μF]を求めよ。\n\n【ヒント】 f0 = 1/(2π√(LC)) → C = 1/(4π²f0²L)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f0 = 1/(2π√(LC)) → C = 1/(4π²f0²L)\n【代入】 C = 1 / (4π² × 380² × 44×10⁻³)\n【計算】 C = 1 / (4π² × 144400 × 0.044) = 1 / (39.478 × 6353.6) = 1 / 250800 = 3.99×10⁻⁶ F = 3.99 μF\n【答え】 3.99 μF",
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
    "chapter": "2-4並列回路1",
    "difficulty": 1,
    "text": "下図のRL並列回路において、電圧V=110V、抵抗R=3Ω、誘導性リアクタンスXL=4Ωのときの、回路を流れる電流I[A]および電圧Ⓥと電流Ⓘの位相差θ[rad]を求めよ。\n\n【ヒント】 IR = V/R，IL = V/XL，I = √(IR² + IL²)，θ = arctan(IL/IR)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 IR = V/R，IL = V/XL，I = √(IR² + IL²)，θ = arctan(IL/IR)\n【代入】 IR = 110/3 = 36.7 A，IL = 110/4 = 27.5 A\n【計算】 I = √(36.7² + 27.5²) = √(1347 + 756) = √2103 = 45.8 A，θ = arctan(27.5/36.7) = 0.643 rad\n【答え】 I = 45.8 A，θ = 0.643 rad",
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
    "chapter": "2-4並列回路1",
    "difficulty": 1,
    "text": "抵抗82Ωと誘導性リアクタンス60Ωを並列に接続した。このRL並列回路に110Vの電圧を加えたとき、抵抗に流れる電流IR[A]、誘導性リアクタンスに流れる電流IL[A]、回路に流れる電流I[A]を求めよ。\n\n【ヒント】 IR = V/R，IL = V/XL，I = √(IR² + IL²)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 IR = V/R，IL = V/XL，I = √(IR² + IL²)\n【代入】 IR = 110/82 = 1.34 A，IL = 110/60 = 1.83 A\n【計算】 I = √(1.34² + 1.83²) = √(1.796 + 3.349) = √5.145 = 2.27 A\n【答え】 IR = 1.34 A，IL = 1.83 A，I = 2.27 A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路1"
    ],
    "numeric_answer": 1.34,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.0268,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 140,
    "category": "第4章 交流回路",
    "chapter": "2-4並列回路1",
    "difficulty": 1,
    "text": "上図のRL並列回路において、抵抗R=6.9Ω、インピーダンスZ=4Ωのときの、誘導性リアクタンスXL[Ω]を求めよ。また、電流I=7Aのときの電圧V[V]を求めよ。\n\n【ヒント】 並列: 1/Z = √(1/R² + 1/XL²) → 1/XL = √(1/Z² - 1/R²)，V = Z × I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 並列: 1/Z = √(1/R² + 1/XL²) → 1/XL = √(1/Z² - 1/R²)，V = Z × I\n【代入】 1/XL = √(1/4² - 1/6.9²) = √(0.0625 - 0.0210) = √0.04152 = 0.2038\n【計算】 XL = 1/0.2038 = 4.91 Ω，V = 4 × 7 = 28 V\n【答え】 XL = 4.91 Ω，V = 28 V",
    "tags": [
      "第4章交流回路",
      "2-4並列回路1"
    ],
    "numeric_answer": 4.91,
    "numeric_unit": "Ω",
    "numeric_tolerance_abs": 0.09820000000000001,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 141,
    "category": "第4章 交流回路",
    "chapter": "2-4並列回路2",
    "difficulty": 1,
    "text": "下図のRC並列回路において、電圧V=110V、抵抗R=6Ω、容量性リアクタンスXC=4Ωのときの、回路を流れる電流I[A]および電圧Ⓥと電流Ⓘの位相差θ[rad]を求めよ。\n\n【ヒント】 IR = V/R，IC = V/XC，I = √(IR² + IC²)，θ = arctan(IC/IR)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 IR = V/R，IC = V/XC，I = √(IR² + IC²)，θ = arctan(IC/IR)\n【代入】 IR = 110/6 = 18.3 A，IC = 110/4 = 27.5 A\n【計算】 I = √(18.3² + 27.5²) = √(335 + 756) = √1091 = 33.1 A，θ = arctan(27.5/18.3) = 0.982 rad\n【答え】 I = 33.1 A，θ = 0.982 rad",
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
    "chapter": "2-4並列回路2",
    "difficulty": 1,
    "text": "上図において、R=4Ω、XC=33Ω、電圧V=100Vのとき、IR[A],IC[A],I[A]を求めよ。また、電圧Vと電流Iの位相差θ[rad]を求めよ。\n\n【ヒント】 IR = V/R，IC = V/XC，I = √(IR² + IC²)，θ = arctan(IC/IR)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 IR = V/R，IC = V/XC，I = √(IR² + IC²)，θ = arctan(IC/IR)\n【代入】 IR = 100/4 = 25 A，IC = 100/33 = 3.03 A\n【計算】 I = √(25² + 3.03²) = √(625 + 9.18) = √634 = 25.2 A，θ = arctan(3.03/25) = 0.120 rad\n【答え】 IR = 25 A，IC = 3.03 A，I = 25.2 A，θ = 0.120 rad",
    "tags": [
      "第4章交流回路",
      "2-4並列回路2"
    ],
    "numeric_answer": 25.0,
    "numeric_unit": "A I= 25.2A",
    "numeric_tolerance_abs": 0.5,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 143,
    "category": "第4章 交流回路",
    "chapter": "2-4並列回路2",
    "difficulty": 1,
    "text": "抵抗22Ωと容量性リアクタンス45Ωを並列に接続した。このRC並列回路に380Vの電圧を加えたとき、抵抗に流れる電流IR[A]、容量性リアクタンスに流れる電流IC[A]、回路に流れるI[A]を求めよ。\n\n【ヒント】 IR = V/R，IC = V/XC，I = √(IR² + IC²)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 IR = V/R，IC = V/XC，I = √(IR² + IC²)\n【代入】 IR = 380/22 = 17.3 A，IC = 380/45 = 8.44 A\n【計算】 I = √(17.3² + 8.44²) = √(299 + 71.2) = √370 = 19.2 A\n【答え】 IR = 17.3 A，IC = 8.44 A，I = 19.2 A",
    "tags": [
      "第4章交流回路",
      "2-4並列回路2"
    ],
    "numeric_answer": 17.3,
    "numeric_unit": "A",
    "numeric_tolerance_abs": 0.34600000000000003,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 144,
    "category": "第4章 交流回路",
    "chapter": "2-4並列回路3",
    "difficulty": 1,
    "text": "上図の回路においてE=190V、R=141Ω、L=30mH、C=480μFであるとき、共振周波数f0[Hz]および、共振時に抵抗に流れる電流IR[A]、コイルに流れる電流IL[A]、コンデンサに流れる電流IC[A]を求めよ。\n\n【ヒント】 f0 = 1 / (2π√(LC))，共振時: IR = E/R，IL = IC = E/XL",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 f0 = 1 / (2π√(LC))，共振時: IR = E/R，IL = IC = E/XL\n【代入】 LC = 0.03 × 480×10⁻⁶ = 1.44×10⁻⁵，f0 = 1/(2π×√(1.44×10⁻⁵))\n【計算】 f0 = 1/(2π × 3.795×10⁻³) = 41.9 Hz\n【答え】 f0 = 41.9 Hz",
    "tags": [
      "第4章交流回路",
      "2-4並列回路3"
    ],
    "numeric_answer": 0.0,
    "numeric_unit": "= 41.9Hz IL= 24A",
    "numeric_tolerance_abs": 1e-06,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 145,
    "category": "第4章 交流回路",
    "chapter": "3-2皮相、有効、無効電力",
    "difficulty": 1,
    "text": "皮相電力S=1.1kV･Aの電気機器に14Aの電流が流れている。このときに加えた電圧V[V]を求めよ。\n\n【ヒント】 S = V × I → V = S / I",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 S = V × I → V = S / I\n【代入】 V = 1100 / 14\n【計算】 V = 78.6\n【答え】 78.6 V",
    "tags": [
      "第4章交流回路",
      "3-2皮相、有効、無効電力"
    ],
    "numeric_answer": 78.6,
    "numeric_unit": "V",
    "numeric_tolerance_abs": 1.5719999999999998,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 146,
    "category": "第4章 交流回路",
    "chapter": "3-2皮相、有効、無効電力",
    "difficulty": 1,
    "text": "ある電気器具に230Vの交流電圧を加えたとき、15Aの電流が流れ、841Wの電力が消費された。力率cosθと無効率sinθを求めよ。\n\n【ヒント】 S = VI，cosθ = P/S，sinθ = √(1 - cos²θ)",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 S = VI，cosθ = P/S，sinθ = √(1 - cos²θ)\n【代入】 S = 230 × 15 = 3450 VA，cosθ = 841/3450\n【計算】 cosθ = 0.244，sinθ = √(1 - 0.244²) = √(1 - 0.0596) = √0.9404 = 0.970\n【答え】 cosθ = 0.244，sinθ ≈ 0.962",
    "tags": [
      "第4章交流回路",
      "3-2皮相、有効、無効電力"
    ],
    "numeric_answer": 0.244,
    "numeric_unit": "② 0.962",
    "numeric_tolerance_abs": 0.00488,
    "numeric_tolerance_rel": 0.02
  },
  {
    "id": 147,
    "category": "第4章 交流回路",
    "chapter": "3-2皮相、有効、無効電力",
    "difficulty": 2,
    "text": "負荷で消費される有効電力P=5900W、無効電力Q=4900varであるとき、皮相電力S[kV･A]および力率cosθを求めよ。\n\n【ヒント】 S = √(P² + Q²)，cosθ = P/S",
    "question_type": "numeric",
    "choices": [],
    "answer": 0,
    "explanation": "【公式】 S = √(P² + Q²)，cosθ = P/S\n【代入】 S = √(5900² + 4900²) = √(34810000 + 24010000) = √58820000\n【計算】 S = 7670 VA = 7.67 kVA，cosθ = 5900/7670 = 0.769\n【答え】 S = 7.67 kVA，cosθ = 0.769",
    "tags": [
      "第4章交流回路",
      "3-2皮相、有効、無効電力"
    ],
    "numeric_answer": 7.67,
    "numeric_unit": "kV･A",
    "numeric_tolerance_abs": 0.1534,
    "numeric_tolerance_rel": 0.02
  }
];
