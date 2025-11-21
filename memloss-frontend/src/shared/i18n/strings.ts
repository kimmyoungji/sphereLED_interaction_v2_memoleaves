// src/shared/i18n/strings.ts
export type Locale = 'ko' | 'en';

type Dict = {
  common: {
    continue: string;
    restart: string;
  };
  init: {
    intro_title: string;
    intro_desc: string;
    start_button_main: string;
  };
  help: {
    callout_title: string;
    callout_desc: string;
    follow_main: string;
    follow_sub: string;
    stay_main: string;
    stay_sub: string;
  };
  garden: {
    callout_title: string;
    callout_desc: string;
    explore_main: string;
    explore_sub: string;
    back_main: string;
    back_sub: string;
    rotate_hint: string;
    blow_hint: string;
  };
  timeline: {
    page1_title_ko: string;
    page1_title_en: string;
    page2_title_ko: string;
    page2_title_en: string;
    page3_title_ko: string;
    page3_title_en: string;
    start_button_main: string;
    start_button_sub: string;
    continue_button_main: string;
    continue_button_sub: string;
  };
  dragonfly: {
    intro_title: string;
    intro_desc: string;
    start_button_main: string;
    start_button_sub: string;
    hud_score_label: string; // "잠자리"
    hud_time_label: string;
    ending_title: string;
    ending_desc: string;
    ending_button_main: string;
    ending_button_sub: string;
  };
  finale: {
    restart_cta: string;
    thank_you: string;
  };
};

const ko: Dict = {
  common: {
    continue: '계속',
    restart: '다시 시작',
  },
  init: {
    intro_title: '헤드셋이나 이어폰을 착용하면\n더 입체적으로 감상할 수 있습니다.',
    intro_desc: 'Wear a headset or earphones\nfor a more immersive experience.',
    start_button_main: 'Tap to start',
  },
  help: {
    callout_title: '제임스가 정원으로 걸어 나가고 있습니다.\n함께 나가시겠습니까?',
    callout_desc: '제임스가 정원으로 걸어 나가고 있습니다.\n함께 나가시겠습니까?',
    follow_main: '같이 나간다',
    follow_sub: 'follow him',
    stay_main: '머문다',
    stay_sub: 'stay here',
  },
  garden: {
    callout_title: '정원에 나오니,\n모든 것이 희뿌옇습니다.',
    callout_desc: '정원에 나오니,\n모든 것이 희뿌옇습니다.',
    explore_main: '정원을 둘러본다',
    explore_sub: 'explore the garden',
    back_main: '처음으로 돌아간다',
    back_sub: 'go back to the start',
    rotate_hint:
      '구를 돌려 정원을 둘러보세요.\nRotate the sphere to explore the garden.',
    blow_hint:
      '길게 입김을 불어 먼지를 날려보세요.\n제임스의 기억이 서서히 드러날 거예요.\nBlow into the sphere to clear the dust.\nYou’ll begin to see James’s memories.',
  },
  timeline: {
    page1_title_ko:
      '정원의 먼지가 날아가\n제임스의 기억들이 선명해졌습니다.',
    page1_title_en:
      'As the dust cleared,\nJames’s memories became clear again.',
    page2_title_ko: '슬라이더를 움직여\n제임스의 기억을 들여다보세요.',
    page2_title_en:
      'Move the slider\nto explore James’s memories.',
    page3_title_ko:
      '슬라이더를 왼쪽 끝까지 움직이면\n가장 소중한 기억 속으로 더 깊이 들어갑니다.',
    page3_title_en:
      'Push the slider all the way left\nto enter his dearest memory.',
    start_button_main: '기억을 들여다본다',
    start_button_sub: 'look into memories',
    continue_button_main: '계속 진행하기',
    continue_button_sub: 'Tap to continue',
  },
  dragonfly: {
    intro_title:
      '어린 시절의 기억을 떠올린 제임스가\n잠자리를 잡고 싶어합니다.',
    intro_desc:
      'As James recalls his childhood,\nhe wants to catch a dragonfly again.',
    start_button_main: '잠자리를 잡으러 간다',
    start_button_sub: 'catch dragonflies',
    hud_score_label: '잠자리',
    hud_time_label: '남은 시간',
    ending_title:
      '당신과 잠자리를 잡는 그 순간,\n제임스는 잠시나마 \n아픔을 잊고 웃을 수 있었습니다.',
    ending_desc:
      '잠시였지만,\n당신과 잠자리를 잡는 동안\n제임스는 아픔을 잊고 기뻐했습니다.',
    ending_button_main: '계속 진행하기',
    ending_button_sub: 'Tap to continue',
  },
  finale: {
    restart_cta: 'Tap to restart',
    thank_you: '감사합니다.',
  },
};

const en: Dict = {
  common: {
    continue: 'Continue',
    restart: 'Restart',
  },
  init: {
    intro_title:
      'Wearing a headset or earphones\nprovides a more immersive experience.',
    intro_desc:
      'Wearing a headset or earphones\nprovides a more immersive experience.',
    start_button_main: 'Tap to start',
  },
  help: {
    callout_title:
      'James is walking out to the garden.\nWould you like to join him?',
    callout_desc:
      'James is walking out to the garden.\nWould you like to join him?',
    follow_main: 'Follow him',
    follow_sub: 'follow him',
    stay_main: 'Stay here',
    stay_sub: 'stay here',
  },
  garden: {
    callout_title:
      'As we step into the garden,\neverything looks hazy.',
    callout_desc:
      'As we step into the garden,\neverything looks hazy.',
    explore_main: 'Explore the garden',
    explore_sub: 'explore the garden',
    back_main: 'Go back to start',
    back_sub: 'go back to the start',
    rotate_hint: 'Rotate the sphere to explore the garden.',
    blow_hint:
      'Blow into the sphere to clear the dust.\nYou’ll begin to see James’s memories.',
  },
  timeline: {
    page1_title_ko:
      'As the dust cleared,\nJames’s memories became clear again.',
    page1_title_en:
      'As the dust cleared,\nJames’s memories became clear again.',
    page2_title_ko:
      'Move the slider\nto explore James’s memories.',
    page2_title_en:
      'Move the slider\nto explore James’s memories.',
    page3_title_ko:
      'Push the slider all the way left\nto enter his dearest memory.',
    page3_title_en:
      'Push the slider all the way left\nto enter his dearest memory.',
    start_button_main: 'Look into memories',
    start_button_sub: 'look into memories',
    continue_button_main: 'Continue',
    continue_button_sub: 'Tap to continue',
  },
  dragonfly: {
    intro_title:
      'As James recalls his childhood,\nhe wants to catch a dragonfly again.',
    intro_desc:
      'As James recalls his childhood,\nhe wants to catch a dragonfly again.',
    start_button_main: 'Catch dragonflies',
    start_button_sub: 'catch dragonflies',
    hud_score_label: 'Dragonflies',
    hud_time_label: 'Time left',
    ending_title:
      'In the moment he caught dragonflies with you,\nJames briefly forgot his pain and smiled.',
    ending_desc:
      'For a brief moment,\nas he chased dragonflies with you,\nJames forgot the ache in his heart.',
    ending_button_main: 'Continue',
    ending_button_sub: 'Tap to continue',
  },
  finale: {
    restart_cta: 'Tap to restart',
    thank_you: 'Thank you.',
  },
};

const bundles: Record<Locale, Dict> = { ko, en };

let currentLocale: Locale = 'ko';
export const setLocale = (loc: Locale) => (currentLocale = loc);
export const getLocale = () => currentLocale;

export function t<K1 extends keyof Dict, K2 extends keyof Dict[K1]>(
  ns: K1,
  key: K2,
): string {
  return bundles[currentLocale][ns][key] as string;
}
