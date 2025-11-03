// src/types/events.ts
export type Phase = 'INIT'|'HELP'|'GARDEN_AND_DUST'|'TIMELINE'|'DRAGONFLY'|'FINALE';

export type OutEvent =
  | { type:'init' }
  | { type:'start' }
  | { type:'consentYes' }
  | { type:'consentNo' }
  | { type:'rotation'; payload:{ yaw:number; pitch:number; roll:number } }
  | { type:'breath'; payload:{ intensity:number } }          // 0..1
  | { type:'timelineSeek'; payload:{ t:number } }            // 0..1
  | { type:'catch'; payload:{ x:number; y:number } };

export type InEvent =
  | { type:'phase'; payload: { phase:Phase } }
  | { type:'led.param'; payload: { key:'dustOpacity'|'rotation'; value:any } }
  | { type:'timeline.update'; payload: { t:number; label?:string } }
  | { type:'finale'; payload: { message:string } };
