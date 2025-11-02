// src/types/events.ts
export type Phase = 'INIT'|'HELP'|'GARDEN_AND_DUST'|'TIMELINE'|'DRAGONFLY'|'FINALE';

export type OutEvent =
  | { type:'consentYes' }
  | { type:'rotation'; payload:{ yaw:number; pitch:number; roll:number } }
  | { type:'breath'; payload:{ intensity:number } }          // 0..1
  | { type:'timelineSeek'; payload:{ t:number } }            // 0..1
  | { type:'catch'; payload:{ x:number; y:number } };

export type InEvent =
  | { type:'phase'; phase:Phase }
  | { type:'led.param'; key:'dustOpacity'|'rotation'; value:any }
  | { type:'timeline.update'; t:number; label?:string }
  | { type:'finale'; message:string };
