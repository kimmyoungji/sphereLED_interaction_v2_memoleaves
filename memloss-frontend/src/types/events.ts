// src/types/events.ts
export type Phase = 'INIT'|'HELP'|'GARDEN_AND_DUST'|'TIMELINE'|'DRAGONFLY'|'FINALE';

export type OutEvent =
  | { type:'init' }
  | { type:'start' }
  | { type:'consentYes' }
  | { type:'consentNo' }
  | { type:'sphereRotation'; payload:{ yaw:number; pitch:number; roll:number } }
  | { type:'sphereOpacity'; payload:{ intensity:number; blowing?: boolean } }          // 0..1
  | { type:'timelineSeek'; payload:{ t:number } }            // 0..1
  | { type:'catch'; payload:{ x:number; y:number } }
  | { type:'prev' }
  | { type:'next' };

export type InEvent =
  | { type:'phase'; payload: { phase:Phase } }
  | { type:'sphereRotation'; payload: { yaw:number; pitch:number; roll:number } }
  | { type:'sphereOpacity'; payload:{ opacity:number } };
  //| { type:'timeline.update'; payload: { t:number; label?:string } }
  // | { type:'finale'; payload: { message:string } }
