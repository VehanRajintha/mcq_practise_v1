import { MCQQuestion } from '@/types/mcq';

export const esMockExamQuestions: MCQQuestion[] = [
  // Section A: Introduction to Embedded Systems (Questions 1-15)
  {
    id: 'es-mock-1',
    question: 'What is the primary characteristic that distinguishes an embedded system from a general-purpose computer?',
    type: 'single',
    options: [
      { id: 'a', text: 'Higher processing power', isCorrect: false },
      { id: 'b', text: 'Special-purpose design for dedicated functions', isCorrect: true },
      { id: 'c', text: 'Larger memory capacity', isCorrect: false },
      { id: 'd', text: 'Better graphics capabilities', isCorrect: false }
    ],
    explanation: 'Embedded systems are designed for specific, dedicated functions rather than general-purpose computing tasks.'
  },
  {
    id: 'es-mock-2',
    question: 'In the refrigerator control system example, what is the primary feedback mechanism?',
    type: 'single',
    options: [
      { id: 'a', text: 'User interface display', isCorrect: false },
      { id: 'b', text: 'Temperature sensor providing current internal temperature', isCorrect: true },
      { id: 'c', text: 'Compressor motor status', isCorrect: false },
      { id: 'd', text: 'Power consumption monitoring', isCorrect: false }
    ],
    explanation: 'The temperature sensor provides feedback about the current internal temperature, which is essential for closed-loop control.'
  },
  {
    id: 'es-mock-3',
    question: 'Which of the following is NOT typically a design constraint for embedded systems?',
    type: 'single',
    options: [
      { id: 'a', text: 'Low cost', isCorrect: false },
      { id: 'b', text: 'Limited memory', isCorrect: false },
      { id: 'c', text: 'High graphics performance', isCorrect: true },
      { id: 'd', text: 'Low energy consumption', isCorrect: false }
    ],
    explanation: 'High graphics performance is not typically a constraint for embedded systems, which are usually designed for specific functions rather than graphics-intensive applications.'
  },
  {
    id: 'es-mock-4',
    question: 'What is the main difference between a microprocessor and microcontroller?',
    type: 'single',
    options: [
      { id: 'a', text: 'Microprocessors are faster', isCorrect: false },
      { id: 'b', text: 'Microcontrollers have built-in peripherals while microprocessors require external circuitry', isCorrect: true },
      { id: 'c', text: 'Microprocessors consume less power', isCorrect: false },
      { id: 'd', text: 'Microcontrollers are more expensive', isCorrect: false }
    ],
    explanation: 'Microcontrollers integrate CPU, memory, and peripherals on a single chip, while microprocessors require external components for complete functionality.'
  },
  {
    id: 'es-mock-5',
    question: 'The Arduino Uno uses which microcontroller?',
    type: 'single',
    options: [
      { id: 'a', text: 'ATmega32', isCorrect: false },
      { id: 'b', text: 'ATmega128', isCorrect: false },
      { id: 'c', text: 'ATmega328P', isCorrect: true },
      { id: 'd', text: 'ATtiny13', isCorrect: false }
    ],
    explanation: 'The Arduino Uno is based on the ATmega328P microcontroller.'
  },
  {
    id: 'es-mock-6',
    question: 'What is the operating frequency of the Arduino Uno\'s microcontroller?',
    type: 'single',
    options: [
      { id: 'a', text: '8 MHz', isCorrect: false },
      { id: 'b', text: '16 MHz', isCorrect: true },
      { id: 'c', text: '20 MHz', isCorrect: false },
      { id: 'd', text: '32 MHz', isCorrect: false }
    ],
    explanation: 'The ATmega328P in Arduino Uno operates at 16 MHz.'
  },
  {
    id: 'es-mock-7',
    question: 'In the embedded system concept map, why is sensor signal sent back to the controller?',
    type: 'single',
    options: [
      { id: 'a', text: 'To increase system complexity', isCorrect: false },
      { id: 'b', text: 'To provide feedback for closed-loop control', isCorrect: true },
      { id: 'c', text: 'To reduce power consumption', isCorrect: false },
      { id: 'd', text: 'To improve user interface', isCorrect: false }
    ],
    explanation: 'Sensor feedback enables closed-loop control, allowing the system to adjust its output based on actual conditions.'
  },
  {
    id: 'es-mock-8',
    question: 'When is it NOT appropriate to use a microcontroller?',
    type: 'single',
    options: [
      { id: 'a', text: 'When intelligence is required in the system', isCorrect: false },
      { id: 'b', text: 'When the system requires intensive number crunching beyond the MCU\'s capability', isCorrect: true },
      { id: 'c', text: 'When communication with other devices is necessary', isCorrect: false },
      { id: 'd', text: 'When cost reduction is important', isCorrect: false }
    ],
    explanation: 'Microcontrollers are not suitable for intensive computational tasks that exceed their processing capabilities.'
  },
  {
    id: 'es-mock-9',
    question: 'What type of memory in Arduino Uno stores the program code?',
    type: 'single',
    options: [
      { id: 'a', text: 'SRAM', isCorrect: false },
      { id: 'b', text: 'Flash memory', isCorrect: true },
      { id: 'c', text: 'EEPROM', isCorrect: false },
      { id: 'd', text: 'Cache memory', isCorrect: false }
    ],
    explanation: 'Flash memory is used to store the program code in Arduino Uno.'
  },
  {
    id: 'es-mock-10',
    question: 'The ATmega328P has how many general-purpose registers?',
    type: 'single',
    options: [
      { id: 'a', text: '16', isCorrect: false },
      { id: 'b', text: '32', isCorrect: true },
      { id: 'c', text: '64', isCorrect: false },
      { id: 'd', text: '8', isCorrect: false }
    ],
    explanation: 'The ATmega328P has 32 general-purpose registers (R0-R31).'
  },
  {
    id: 'es-mock-11',
    question: 'What is the primary advantage of Harvard architecture in AVR microcontrollers?',
    type: 'single',
    options: [
      { id: 'a', text: 'Lower cost', isCorrect: false },
      { id: 'b', text: 'Separate buses for opcodes and operands allow simultaneous fetch and execute', isCorrect: true },
      { id: 'c', text: 'Higher memory capacity', isCorrect: false },
      { id: 'd', text: 'Better power efficiency', isCorrect: false }
    ],
    explanation: 'Harvard architecture allows simultaneous instruction fetch and data access through separate buses, improving performance.'
  },
  {
    id: 'es-mock-12',
    question: 'Which pin on ATmega328P is used for external reset?',
    type: 'single',
    options: [
      { id: 'a', text: 'PC6', isCorrect: true },
      { id: 'b', text: 'PD0', isCorrect: false },
      { id: 'c', text: 'PB0', isCorrect: false },
      { id: 'd', text: 'VCC', isCorrect: false }
    ],
    explanation: 'PC6 is the external reset pin on ATmega328P.'
  },
  {
    id: 'es-mock-13',
    question: 'The AVCC pin on ATmega328P should be connected to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Ground', isCorrect: false },
      { id: 'b', text: 'VCC for ADC reference', isCorrect: true },
      { id: 'c', text: 'External reset circuit', isCorrect: false },
      { id: 'd', text: 'Crystal oscillator', isCorrect: false }
    ],
    explanation: 'AVCC is the analog supply voltage pin used as reference for the ADC.'
  },
  {
    id: 'es-mock-14',
    question: 'What is the typical power consumption of Arduino Uno in active mode?',
    type: 'single',
    options: [
      { id: 'a', text: '5mA', isCorrect: false },
      { id: 'b', text: '50mA', isCorrect: true },
      { id: 'c', text: '500mA', isCorrect: false },
      { id: 'd', text: '5A', isCorrect: false }
    ],
    explanation: 'Arduino Uno typically consumes around 50mA in active mode.'
  },
  {
    id: 'es-mock-15',
    question: 'Which programming method does NOT apply to AVR microcontrollers?',
    type: 'single',
    options: [
      { id: 'a', text: 'ISP (In-System Programming)', isCorrect: false },
      { id: 'b', text: 'JTAG', isCorrect: false },
      { id: 'c', text: 'Bootloader', isCorrect: false },
      { id: 'd', text: 'USB-C direct programming', isCorrect: true }
    ],
    explanation: 'AVR microcontrollers do not support USB-C direct programming; they use ISP, JTAG, or bootloader methods.'
  },
  // Section B: AVR Architecture and Assembly Programming (Questions 16-35)
  {
    id: 'es-mock-16',
    question: 'What is the width of the data bus in ATmega328P?',
    type: 'single',
    options: [
      { id: 'a', text: '16 bits', isCorrect: false },
      { id: 'b', text: '32 bits', isCorrect: false },
      { id: 'c', text: '8 bits', isCorrect: true },
      { id: 'd', text: '64 bits', isCorrect: false }
    ],
    explanation: 'The ATmega328P has an 8-bit data bus.'
  },
  {
    id: 'es-mock-17',
    question: 'The program counter (PC) in ATmega328P is:',
    type: 'single',
    options: [
      { id: 'a', text: '8 bits wide', isCorrect: false },
      { id: 'b', text: '16 bits wide', isCorrect: true },
      { id: 'c', text: '32 bits wide', isCorrect: false },
      { id: 'd', text: '64 bits wide', isCorrect: false }
    ],
    explanation: 'The program counter in ATmega328P is 16 bits wide to address the 32KB Flash memory.'
  },
  {
    id: 'es-mock-18',
    question: 'What is the address range for Flash memory in ATmega328P?',
    type: 'single',
    options: [
      { id: 'a', text: '0x0000 to 0x1FFF', isCorrect: false },
      { id: 'b', text: '0x0000 to 0x3FFF', isCorrect: false },
      { id: 'c', text: '0x0000 to 0x7FFF', isCorrect: true },
      { id: 'd', text: '0x0000 to 0xFFFF', isCorrect: false }
    ],
    explanation: 'Flash memory in ATmega328P (32KB) spans from 0x0000 to 0x7FFF.'
  },
  {
    id: 'es-mock-19',
    question: 'SRAM in ATmega328P is used for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Only general-purpose registers', isCorrect: false },
      { id: 'b', text: 'Only I/O registers', isCorrect: false },
      { id: 'c', text: 'General-purpose registers, I/O registers, and user data', isCorrect: true },
      { id: 'd', text: 'Only program storage', isCorrect: false }
    ],
    explanation: 'SRAM in ATmega328P contains general-purpose registers, I/O registers, and user data.'
  },
  {
    id: 'es-mock-20',
    question: 'Which feature is NOT characteristic of RISC architecture?',
    type: 'single',
    options: [
      { id: 'a', text: 'Fixed instruction size', isCorrect: false },
      { id: 'b', text: 'Variable instruction lengths for flexibility', isCorrect: true },
      { id: 'c', text: 'Load/Store architecture', isCorrect: false },
      { id: 'd', text: 'Large number of registers', isCorrect: false }
    ],
    explanation: 'RISC architecture uses fixed instruction size, not variable lengths.'
  },
  {
    id: 'es-mock-21',
    question: 'In AVR assembly, what does the LDI instruction do?',
    type: 'single',
    options: [
      { id: 'a', text: 'Load from data memory', isCorrect: false },
      { id: 'b', text: 'Load immediate value into register', isCorrect: true },
      { id: 'c', text: 'Load indirect from memory', isCorrect: false },
      { id: 'd', text: 'Load and increment', isCorrect: false }
    ],
    explanation: 'LDI (Load Immediate) loads an immediate value directly into a register.'
  },
  {
    id: 'es-mock-22',
    question: 'The instruction "ADD R20, R21" uses which addressing mode?',
    type: 'single',
    options: [
      { id: 'a', text: 'Immediate addressing', isCorrect: false },
      { id: 'b', text: 'Direct addressing', isCorrect: false },
      { id: 'c', text: 'Two-register addressing', isCorrect: true },
      { id: 'd', text: 'Indirect addressing', isCorrect: false }
    ],
    explanation: 'ADD R20, R21 uses two-register addressing mode, operating on two registers directly.'
  },
  {
    id: 'es-mock-23',
    question: 'What is the maximum immediate value that can be loaded using LDI instruction?',
    type: 'single',
    options: [
      { id: 'a', text: '255', isCorrect: true },
      { id: 'b', text: '511', isCorrect: false },
      { id: 'c', text: '1023', isCorrect: false },
      { id: 'd', text: '65535', isCorrect: false }
    ],
    explanation: 'LDI can load immediate values from 0 to 255 (8-bit values).'
  },
  {
    id: 'es-mock-24',
    question: 'Which registers can be used with LDI instruction?',
    type: 'single',
    options: [
      { id: 'a', text: 'R0-R31', isCorrect: false },
      { id: 'b', text: 'R16-R31', isCorrect: true },
      { id: 'c', text: 'R0-R15', isCorrect: false },
      { id: 'd', text: 'R24-R31', isCorrect: false }
    ],
    explanation: 'LDI instruction can only be used with registers R16-R31.'
  },
  {
    id: 'es-mock-25',
    question: 'The STS instruction uses which addressing mode?',
    type: 'single',
    options: [
      { id: 'a', text: 'Immediate addressing', isCorrect: false },
      { id: 'b', text: 'Register indirect', isCorrect: false },
      { id: 'c', text: 'Direct addressing', isCorrect: true },
      { id: 'd', text: 'I/O direct', isCorrect: false }
    ],
    explanation: 'STS (Store Direct to Data Space) uses direct addressing mode.'
  },
  {
    id: 'es-mock-26',
    question: 'What does the directive .ORG do in AVR assembly?',
    type: 'single',
    options: [
      { id: 'a', text: 'Defines a constant', isCorrect: false },
      { id: 'b', text: 'Sets the origin address for code placement', isCorrect: true },
      { id: 'c', text: 'Includes another file', isCorrect: false },
      { id: 'd', text: 'Defines a macro', isCorrect: false }
    ],
    explanation: '.ORG directive sets the origin address where the following code will be placed.'
  },
  {
    id: 'es-mock-27',
    question: 'In register indirect addressing with X register, X is formed by:',
    type: 'single',
    options: [
      { id: 'a', text: 'R26:R27', isCorrect: true },
      { id: 'b', text: 'R28:R29', isCorrect: false },
      { id: 'c', text: 'R30:R31', isCorrect: false },
      { id: 'd', text: 'R24:R25', isCorrect: false }
    ],
    explanation: 'The X register is formed by concatenating R26 (XL) and R27 (XH).'
  },
  {
    id: 'es-mock-28',
    question: 'The instruction "LD R20, Y+" performs:',
    type: 'single',
    options: [
      { id: 'a', text: 'Load from Y address and pre-decrement Y', isCorrect: false },
      { id: 'b', text: 'Load from Y address and post-increment Y', isCorrect: true },
      { id: 'c', text: 'Load from Y+1 address', isCorrect: false },
      { id: 'd', text: 'Load immediate value Y', isCorrect: false }
    ],
    explanation: 'LD R20, Y+ loads from the Y address and then increments Y (post-increment).'
  },
  {
    id: 'es-mock-29',
    question: 'What is the purpose of pipelining in AVR architecture?',
    type: 'single',
    options: [
      { id: 'a', text: 'Reduce power consumption', isCorrect: false },
      { id: 'b', text: 'Allow simultaneous fetch and execute of instructions', isCorrect: true },
      { id: 'c', text: 'Increase memory capacity', isCorrect: false },
      { id: 'd', text: 'Improve instruction decoding', isCorrect: false }
    ],
    explanation: 'Pipelining allows the processor to fetch the next instruction while executing the current one.'
  },
  {
    id: 'es-mock-30',
    question: 'The Harvard architecture in AVR provides:',
    type: 'single',
    options: [
      { id: 'a', text: 'Single bus for both program and data', isCorrect: false },
      { id: 'b', text: 'Separate buses for program and data memory', isCorrect: true },
      { id: 'c', text: 'Shared memory space for program and data', isCorrect: false },
      { id: 'd', text: 'Von Neumann architecture', isCorrect: false }
    ],
    explanation: 'Harvard architecture uses separate buses for program and data memory access.'
  },
  {
    id: 'es-mock-31',
    question: 'Which directive is used to include header files in AVR assembly?',
    type: 'single',
    options: [
      { id: 'a', text: '.ORG', isCorrect: false },
      { id: 'b', text: '.INCLUDE', isCorrect: true },
      { id: 'c', text: '.EQU', isCorrect: false },
      { id: 'd', text: '.SET', isCorrect: false }
    ],
    explanation: '.INCLUDE directive is used to include header files in AVR assembly.'
  },
  {
    id: 'es-mock-32',
    question: 'The machine cycle time for a 16MHz AVR microcontroller is:',
    type: 'single',
    options: [
      { id: 'a', text: '16 ns', isCorrect: false },
      { id: 'b', text: '62.5 ns', isCorrect: true },
      { id: 'c', text: '125 ns', isCorrect: false },
      { id: 'd', text: '1 μs', isCorrect: false }
    ],
    explanation: 'Machine cycle time = 1/16MHz = 62.5 ns for a 16MHz AVR.'
  },
  {
    id: 'es-mock-33',
    question: 'What percentage of AVR instructions execute in one machine cycle?',
    type: 'single',
    options: [
      { id: 'a', text: '50%', isCorrect: false },
      { id: 'b', text: '75%', isCorrect: false },
      { id: 'c', text: '95%', isCorrect: false },
      { id: 'd', text: '100%', isCorrect: false }
    ],
    explanation: 'Most AVR instructions execute in one machine cycle, with some exceptions like CALL and RET.'
  },
  {
    id: 'es-mock-34',
    question: 'The bootloader in ATmega328P is typically located:',
    type: 'single',
    options: [
      { id: 'a', text: 'At the beginning of Flash memory', isCorrect: false },
      { id: 'b', text: 'In EEPROM', isCorrect: false },
      { id: 'c', text: 'In the last 1KB of Flash memory', isCorrect: true },
      { id: 'd', text: 'In SRAM', isCorrect: false }
    ],
    explanation: 'The bootloader is typically located in the last section of Flash memory.'
  },
  {
    id: 'es-mock-35',
    question: 'Which addressing mode is used by the OUT instruction?',
    type: 'single',
    options: [
      { id: 'a', text: 'Direct addressing', isCorrect: false },
      { id: 'b', text: 'I/O direct addressing', isCorrect: true },
      { id: 'c', text: 'Register indirect', isCorrect: false },
      { id: 'd', text: 'Immediate addressing', isCorrect: false }
    ],
    explanation: 'OUT instruction uses I/O direct addressing to write to I/O registers.'
  },
  // Section C: Jump, Call, and Control Flow (Questions 36-50)
  {
    id: 'es-mock-36',
    question: 'What is the difference between JMP and RJMP instructions?',
    type: 'single',
    options: [
      { id: 'a', text: 'JMP uses absolute addressing, RJMP uses relative addressing', isCorrect: true },
      { id: 'b', text: 'JMP is faster than RJMP', isCorrect: false },
      { id: 'c', text: 'RJMP can jump further than JMP', isCorrect: false },
      { id: 'd', text: 'There is no difference', isCorrect: false }
    ],
    explanation: 'JMP uses absolute addressing while RJMP uses relative addressing from the current PC.'
  },
  {
    id: 'es-mock-37',
    question: 'The RJMP instruction calculates the target address as:',
    type: 'single',
    options: [
      { id: 'a', text: 'PC = operand', isCorrect: false },
      { id: 'b', text: 'PC = PC + operand', isCorrect: true },
      { id: 'c', text: 'PC = Z register', isCorrect: false },
      { id: 'd', text: 'PC = PC - operand', isCorrect: false }
    ],
    explanation: 'RJMP calculates the target address as PC = PC + operand (relative addressing).'
  },
  {
    id: 'es-mock-38',
    question: 'Which instruction implements PC = Z register?',
    type: 'single',
    options: [
      { id: 'a', text: 'JMP', isCorrect: false },
      { id: 'b', text: 'RJMP', isCorrect: false },
      { id: 'c', text: 'IJMP', isCorrect: true },
      { id: 'd', text: 'CALL', isCorrect: false }
    ],
    explanation: 'IJMP (Indirect Jump) sets PC = Z register.'
  },
  {
    id: 'es-mock-39',
    question: 'The conditional branch instruction BRNE checks:',
    type: 'single',
    options: [
      { id: 'a', text: 'Carry flag', isCorrect: false },
      { id: 'b', text: 'Zero flag', isCorrect: true },
      { id: 'c', text: 'Negative flag', isCorrect: false },
      { id: 'd', text: 'Overflow flag', isCorrect: false }
    ],
    explanation: 'BRNE (Branch if Not Equal) checks the Zero flag and branches when Z=0.'
  },
  {
    id: 'es-mock-40',
    question: 'After executing SUB R20, R21, if R20 equals R21, which flag is set?',
    type: 'single',
    options: [
      { id: 'a', text: 'Carry flag', isCorrect: false },
      { id: 'b', text: 'Zero flag', isCorrect: true },
      { id: 'c', text: 'Negative flag', isCorrect: false },
      { id: 'd', text: 'Overflow flag', isCorrect: false }
    ],
    explanation: 'When R20 equals R21, the result of SUB is zero, so the Zero flag is set.'
  },
  {
    id: 'es-mock-41',
    question: 'The instruction BRCS branches when:',
    type: 'single',
    options: [
      { id: 'a', text: 'Carry flag is cleared', isCorrect: false },
      { id: 'b', text: 'Carry flag is set', isCorrect: true },
      { id: 'c', text: 'Zero flag is set', isCorrect: false },
      { id: 'd', text: 'Zero flag is cleared', isCorrect: false }
    ],
    explanation: 'BRCS (Branch if Carry Set) branches when the Carry flag is set (C=1).'
  },
  {
    id: 'es-mock-42',
    question: 'What happens to the stack pointer when PUSH instruction is executed?',
    type: 'single',
    options: [
      { id: 'a', text: 'SP = SP + 1', isCorrect: false },
      { id: 'b', text: 'SP = SP - 1', isCorrect: true },
      { id: 'c', text: 'SP remains unchanged', isCorrect: false },
      { id: 'd', text: 'SP = 0', isCorrect: false }
    ],
    explanation: 'PUSH decrements the stack pointer (SP = SP - 1) before storing data.'
  },
  {
    id: 'es-mock-43',
    question: 'The CALL instruction performs which operations?',
    type: 'single',
    options: [
      { id: 'a', text: 'Only jumps to subroutine', isCorrect: false },
      { id: 'b', text: 'Saves return address on stack and jumps to subroutine', isCorrect: true },
      { id: 'c', text: 'Only saves registers', isCorrect: false },
      { id: 'd', text: 'Only sets flags', isCorrect: false }
    ],
    explanation: 'CALL saves the return address on the stack and then jumps to the subroutine.'
  },
  {
    id: 'es-mock-44',
    question: 'What does the RET instruction do?',
    type: 'single',
    options: [
      { id: 'a', text: 'Returns a value', isCorrect: false },
      { id: 'b', text: 'Resets the processor', isCorrect: false },
      { id: 'c', text: 'Restores PC from stack and returns from subroutine', isCorrect: true },
      { id: 'd', text: 'Rotates register contents', isCorrect: false }
    ],
    explanation: 'RET restores the PC from the stack and returns from the subroutine.'
  },
  {
    id: 'es-mock-45',
    question: 'In a FOR loop implementation, which instruction is commonly used for loop termination check?',
    type: 'single',
    options: [
      { id: 'a', text: 'CMP', isCorrect: false },
      { id: 'b', text: 'SUB followed by conditional branch', isCorrect: true },
      { id: 'c', text: 'ADD', isCorrect: false },
      { id: 'd', text: 'AND', isCorrect: false }
    ],
    explanation: 'FOR loops typically use SUB followed by conditional branch instructions for termination checks.'
  },
  {
    id: 'es-mock-46',
    question: 'The branch instruction BRGE checks:',
    type: 'single',
    options: [
      { id: 'a', text: 'N flag only', isCorrect: false },
      { id: 'b', text: 'S flag (N ⊕ V)', isCorrect: true },
      { id: 'c', text: 'Z flag only', isCorrect: false },
      { id: 'd', text: 'C flag only', isCorrect: false }
    ],
    explanation: 'BRGE (Branch if Greater or Equal) checks the S flag, which is N ⊕ V (Negative XOR Overflow).'
  },
  {
    id: 'es-mock-47',
    question: 'What is the maximum relative jump distance for RJMP instruction?',
    type: 'single',
    options: [
      { id: 'a', text: '±1K words', isCorrect: false },
      { id: 'b', text: '±2K words', isCorrect: true },
      { id: 'c', text: '±4K words', isCorrect: false },
      { id: 'd', text: '±8K words', isCorrect: false }
    ],
    explanation: 'RJMP can jump up to ±2K words from the current PC location.'
  },
  {
    id: 'es-mock-48',
    question: 'The instruction "DEC R16" affects which flag when result becomes zero?',
    type: 'single',
    options: [
      { id: 'a', text: 'Only carry flag', isCorrect: false },
      { id: 'b', text: 'Only zero flag', isCorrect: false },
      { id: 'c', text: 'Both zero and negative flags', isCorrect: true },
      { id: 'd', text: 'All flags in SREG', isCorrect: false }
    ],
    explanation: 'DEC affects the Zero flag (when result is 0) and Negative flag (when result is negative).'
  },
  {
    id: 'es-mock-49',
    question: 'For implementing IF-ELSE structure, which instruction pattern is typically used?',
    type: 'single',
    options: [
      { id: 'a', text: 'Conditional branch to ELSE, execute IF code, jump past ELSE', isCorrect: true },
      { id: 'b', text: 'Only conditional branch', isCorrect: false },
      { id: 'c', text: 'Only unconditional jump', isCorrect: false },
      { id: 'd', text: 'CALL and RET', isCorrect: false }
    ],
    explanation: 'IF-ELSE typically uses: conditional branch to ELSE, execute IF code, then jump past ELSE code.'
  },
  {
    id: 'es-mock-50',
    question: 'The time delay in a loop depends on:',
    type: 'single',
    options: [
      { id: 'a', text: 'Only the number of iterations', isCorrect: false },
      { id: 'b', text: 'Number of iterations and machine cycles per iteration', isCorrect: true },
      { id: 'c', text: 'Only the clock frequency', isCorrect: false },
      { id: 'd', text: 'Only the instruction type', isCorrect: false }
    ],
    explanation: 'Loop delay depends on both the number of iterations and the machine cycles per iteration.'
  },
  // Section D: Interrupts (Questions 51-75)
  {
    id: 'es-mock-51',
    question: 'What is the primary advantage of interrupts over polling?',
    type: 'single',
    options: [
      { id: 'a', text: 'Interrupts are faster', isCorrect: false },
      { id: 'b', text: 'Interrupts free up CPU for other tasks', isCorrect: true },
      { id: 'c', text: 'Interrupts use less memory', isCorrect: false },
      { id: 'd', text: 'Interrupts are easier to program', isCorrect: false }
    ],
    explanation: 'Interrupts allow the CPU to perform other tasks while waiting for events, improving system efficiency.'
  },
  {
    id: 'es-mock-52',
    question: 'What happens to the I flag in SREG when an interrupt occurs?',
    type: 'single',
    options: [
      { id: 'a', text: 'It is set to 1', isCorrect: false },
      { id: 'b', text: 'It is cleared to 0', isCorrect: true },
      { id: 'c', text: 'It remains unchanged', isCorrect: false },
      { id: 'd', text: 'It toggles', isCorrect: false }
    ],
    explanation: 'When an interrupt occurs, the I flag is automatically cleared to 0 to prevent nested interrupts.'
  },
  {
    id: 'es-mock-53',
    question: 'The external interrupt INT0 is located at which vector address?',
    type: 'single',
    options: [
      { id: 'a', text: '0x0000', isCorrect: false },
      { id: 'b', text: '0x0002', isCorrect: true },
      { id: 'c', text: '0x0004', isCorrect: false },
      { id: 'd', text: '0x0006', isCorrect: false }
    ],
    explanation: 'INT0 interrupt vector is located at address 0x0002.'
  },
  {
    id: 'es-mock-54',
    question: 'Which register is used to enable external interrupts INT0 and INT1?',
    type: 'single',
    options: [
      { id: 'a', text: 'EICRA', isCorrect: false },
      { id: 'b', text: 'EIMSK', isCorrect: true },
      { id: 'c', text: 'PCICR', isCorrect: false },
      { id: 'd', text: 'TIMSK0', isCorrect: false }
    ],
    explanation: 'EIMSK (External Interrupt Mask Register) is used to enable INT0 and INT1 interrupts.'
  },
  {
    id: 'es-mock-55',
    question: 'To configure INT0 for falling edge triggering, EICRA should be set to:',
    type: 'single',
    options: [
      { id: 'a', text: '0x01', isCorrect: false },
      { id: 'b', text: '0x02', isCorrect: true },
      { id: 'c', text: '0x03', isCorrect: false },
      { id: 'd', text: '0x00', isCorrect: false }
    ],
    explanation: 'EICRA = 0x02 configures INT0 for falling edge triggering.'
  },
  {
    id: 'es-mock-56',
    question: 'The Timer0 overflow interrupt vector is located at:',
    type: 'single',
    options: [
      { id: 'a', text: '0x001C', isCorrect: false },
      { id: 'b', text: '0x001E', isCorrect: false },
      { id: 'c', text: '0x0020', isCorrect: true },
      { id: 'd', text: '0x0022', isCorrect: false }
    ],
    explanation: 'Timer0 overflow interrupt vector is located at address 0x0020.'
  },
  {
    id: 'es-mock-57',
    question: 'Which bit in TIMSK0 enables Timer0 overflow interrupt?',
    type: 'single',
    options: [
      { id: 'a', text: 'TOIE0', isCorrect: true },
      { id: 'b', text: 'OCIE0A', isCorrect: false },
      { id: 'c', text: 'OCIE0B', isCorrect: false },
      { id: 'd', text: 'ICIE0', isCorrect: false }
    ],
    explanation: 'TOIE0 (Timer Overflow Interrupt Enable 0) bit in TIMSK0 enables Timer0 overflow interrupt.'
  },
  {
    id: 'es-mock-58',
    question: 'The RETI instruction:',
    type: 'single',
    options: [
      { id: 'a', text: 'Only returns from interrupt', isCorrect: false },
      { id: 'b', text: 'Returns from interrupt and sets I flag', isCorrect: true },
      { id: 'c', text: 'Only sets I flag', isCorrect: false },
      { id: 'd', text: 'Clears all flags', isCorrect: false }
    ],
    explanation: 'RETI returns from interrupt and sets the I flag to re-enable interrupts.'
  },
  {
    id: 'es-mock-59',
    question: 'Pin change interrupts can be enabled for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Only PORTB', isCorrect: false },
      { id: 'b', text: 'Only PORTC', isCorrect: false },
      { id: 'c', text: 'PORTB, PORTC, and PORTD', isCorrect: true },
      { id: 'd', text: 'All ports including PORTE', isCorrect: false }
    ],
    explanation: 'Pin change interrupts can be enabled for PORTB, PORTC, and PORTD.'
  },
  {
    id: 'es-mock-60',
    question: 'The highest priority interrupt in ATmega328P is:',
    type: 'single',
    options: [
      { id: 'a', text: 'INT0', isCorrect: false },
      { id: 'b', text: 'INT1', isCorrect: false },
      { id: 'c', text: 'Reset', isCorrect: true },
      { id: 'd', text: 'Timer0 overflow', isCorrect: false }
    ],
    explanation: 'Reset has the highest priority (lowest vector address) in ATmega328P.'
  },
  {
    id: 'es-mock-61',
    question: 'What register controls pin change interrupt enable for PORTB?',
    type: 'single',
    options: [
      { id: 'a', text: 'PCMSK0', isCorrect: true },
      { id: 'b', text: 'PCMSK1', isCorrect: false },
      { id: 'c', text: 'PCMSK2', isCorrect: false },
      { id: 'd', text: 'PCICR', isCorrect: false }
    ],
    explanation: 'PCMSK0 controls pin change interrupt enable for PORTB.'
  },
  {
    id: 'es-mock-62',
    question: 'When multiple interrupts occur simultaneously, which executes first?',
    type: 'single',
    options: [
      { id: 'a', text: 'The last one received', isCorrect: false },
      { id: 'b', text: 'The one with highest priority (lowest vector address)', isCorrect: true },
      { id: 'c', text: 'Random selection', isCorrect: false },
      { id: 'd', text: 'The one with longest ISR', isCorrect: false }
    ],
    explanation: 'The interrupt with the highest priority (lowest vector address) executes first.'
  },
  {
    id: 'es-mock-63',
    question: 'To prevent resource conflicts in interrupts, you should:',
    type: 'single',
    options: [
      { id: 'a', text: 'Use different registers for main program and ISR', isCorrect: false },
      { id: 'b', text: 'Save and restore used registers in ISR', isCorrect: false },
      { id: 'c', text: 'Use software stack', isCorrect: false },
      { id: 'd', text: 'All of the above', isCorrect: true }
    ],
    explanation: 'All mentioned techniques help prevent resource conflicts in interrupt service routines.'
  },
  {
    id: 'es-mock-64',
    question: 'The Timer0 compare match A interrupt uses which C vector name?',
    type: 'single',
    options: [
      { id: 'a', text: 'TIMER0_OVF_vect', isCorrect: false },
      { id: 'b', text: 'TIMER0_COMPA_vect', isCorrect: true },
      { id: 'c', text: 'TIMER0_COMPB_vect', isCorrect: false },
      { id: 'd', text: 'INT0_vect', isCorrect: false }
    ],
    explanation: 'TIMER0_COMPA_vect is the C vector name for Timer0 compare match A interrupt.'
  },
  {
    id: 'es-mock-65',
    question: 'What is the purpose of sei() function in C?',
    type: 'single',
    options: [
      { id: 'a', text: 'Set external interrupt', isCorrect: false },
      { id: 'b', text: 'Set interrupt enable flag in SREG', isCorrect: true },
      { id: 'c', text: 'Save interrupt state', isCorrect: false },
      { id: 'd', text: 'Software interrupt', isCorrect: false }
    ],
    explanation: 'sei() sets the global interrupt enable flag (I flag) in SREG.'
  },
  {
    id: 'es-mock-66',
    question: 'The instruction that globally disables interrupts is:',
    type: 'single',
    options: [
      { id: 'a', text: 'SEI', isCorrect: false },
      { id: 'b', text: 'CLI', isCorrect: true },
      { id: 'c', text: 'RETI', isCorrect: false },
      { id: 'd', text: 'NOP', isCorrect: false }
    ],
    explanation: 'CLI (Clear Interrupt) globally disables interrupts by clearing the I flag.'
  },
  {
    id: 'es-mock-67',
    question: 'In pin change interrupts, the interrupt triggers on:',
    type: 'single',
    options: [
      { id: 'a', text: 'Rising edge only', isCorrect: false },
      { id: 'b', text: 'Falling edge only', isCorrect: false },
      { id: 'c', text: 'Any change (rising or falling)', isCorrect: true },
      { id: 'd', text: 'Level high', isCorrect: false }
    ],
    explanation: 'Pin change interrupts trigger on any change (rising or falling edge) of the pin state.'
  },
  {
    id: 'es-mock-68',
    question: 'For Timer0 compare match mode, which register holds the compare value?',
    type: 'single',
    options: [
      { id: 'a', text: 'TCNT0', isCorrect: false },
      { id: 'b', text: 'OCR0A', isCorrect: true },
      { id: 'c', text: 'OCR0B', isCorrect: false },
      { id: 'd', text: 'TCCR0A', isCorrect: false }
    ],
    explanation: 'OCR0A (Output Compare Register 0A) holds the compare value for Timer0 compare match A.'
  },
  {
    id: 'es-mock-69',
    question: 'The watchdog timer interrupt has which priority level?',
    type: 'single',
    options: [
      { id: 'a', text: 'Highest', isCorrect: false },
      { id: 'b', text: 'Higher than external interrupts', isCorrect: false },
      { id: 'c', text: 'Lower than pin change interrupts', isCorrect: false },
      { id: 'd', text: 'Lowest', isCorrect: true }
    ],
    explanation: 'Watchdog timer interrupt has the lowest priority (highest vector address).'
  },
  {
    id: 'es-mock-70',
    question: 'What happens if an interrupt occurs while another interrupt is being serviced?',
    type: 'single',
    options: [
      { id: 'a', text: 'The new interrupt is immediately serviced', isCorrect: false },
      { id: 'b', text: 'The new interrupt is queued until RETI', isCorrect: true },
      { id: 'c', text: 'The processor resets', isCorrect: false },
      { id: 'd', text: 'Both interrupts execute simultaneously', isCorrect: false }
    ],
    explanation: 'New interrupts are queued and will be serviced after the current ISR completes and RETI is executed.'
  },
  {
    id: 'es-mock-71',
    question: 'To save SREG in an ISR, the typical sequence is:',
    type: 'single',
    options: [
      { id: 'a', text: 'PUSH SREG directly', isCorrect: false },
      { id: 'b', text: 'IN R_temp, SREG then PUSH R_temp', isCorrect: true },
      { id: 'c', text: 'No need to save SREG', isCorrect: false },
      { id: 'd', text: 'Use hardware automatic save', isCorrect: false }
    ],
    explanation: 'SREG must be read into a register first, then pushed onto the stack.'
  },
  {
    id: 'es-mock-72',
    question: 'External interrupt INT1 is connected to which pin?',
    type: 'single',
    options: [
      { id: 'a', text: 'PD2', isCorrect: false },
      { id: 'b', text: 'PD3', isCorrect: true },
      { id: 'c', text: 'PB0', isCorrect: false },
      { id: 'd', text: 'PC0', isCorrect: false }
    ],
    explanation: 'INT1 is connected to pin PD3 on ATmega328P.'
  },
  {
    id: 'es-mock-73',
    question: 'The Timer1 capture event interrupt vector address is:',
    type: 'single',
    options: [
      { id: 'a', text: '0x0014', isCorrect: true },
      { id: 'b', text: '0x0016', isCorrect: false },
      { id: 'c', text: '0x0018', isCorrect: false },
      { id: 'd', text: '0x001A', isCorrect: false }
    ],
    explanation: 'Timer1 capture event interrupt vector is located at address 0x0014.'
  },
  {
    id: 'es-mock-74',
    question: 'Which flag indicates Timer0 overflow in TIFR0?',
    type: 'single',
    options: [
      { id: 'a', text: 'OCF0A', isCorrect: false },
      { id: 'b', text: 'OCF0B', isCorrect: false },
      { id: 'c', text: 'TOV0', isCorrect: true },
      { id: 'd', text: 'ICF0', isCorrect: false }
    ],
    explanation: 'TOV0 (Timer Overflow 0) flag in TIFR0 indicates Timer0 overflow.'
  },
  {
    id: 'es-mock-75',
    question: 'For nested interrupts to work, you must:',
    type: 'single',
    options: [
      { id: 'a', text: 'Set I flag in the ISR', isCorrect: true },
      { id: 'b', text: 'Use CALL instead of automatic interrupt', isCorrect: false },
      { id: 'c', text: 'Clear interrupt flags manually', isCorrect: false },
      { id: 'd', text: 'Disable lower priority interrupts', isCorrect: false }
    ],
    explanation: 'To enable nested interrupts, you must set the I flag (sei()) within the ISR.'
  },
  // Section E: Advanced Concepts and Programming (Questions 76-100)
  {
    id: 'es-mock-76',
    question: 'The CTC (Clear Timer on Compare) mode is useful for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Generating precise time delays', isCorrect: false },
      { id: 'b', text: 'Counting external events', isCorrect: false },
      { id: 'c', text: 'PWM generation', isCorrect: false },
      { id: 'd', text: 'All of the above', isCorrect: true }
    ],
    explanation: 'CTC mode is useful for generating precise time delays, counting external events, and PWM generation.'
  },
  {
    id: 'es-mock-77',
    question: 'In AVR assembly, labels must:',
    type: 'single',
    options: [
      { id: 'a', text: 'Start with a number', isCorrect: false },
      { id: 'b', text: 'End with a colon (:)', isCorrect: true },
      { id: 'c', text: 'Be in uppercase only', isCorrect: false },
      { id: 'd', text: 'Not exceed 8 characters', isCorrect: false }
    ],
    explanation: 'AVR assembly labels must end with a colon (:) to be recognized as labels.'
  },
  {
    id: 'es-mock-78',
    question: 'The .EQU directive is used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Include files', isCorrect: false },
      { id: 'b', text: 'Define constants', isCorrect: true },
      { id: 'c', text: 'Set program origin', isCorrect: false },
      { id: 'd', text: 'End program', isCorrect: false }
    ],
    explanation: '.EQU directive is used to define symbolic constants in AVR assembly.'
  },
  {
    id: 'es-mock-79',
    question: 'What is the purpose of pull-up resistors on input pins?',
    type: 'single',
    options: [
      { id: 'a', text: 'Increase input voltage', isCorrect: false },
      { id: 'b', text: 'Provide defined logic level when input is floating', isCorrect: true },
      { id: 'c', text: 'Reduce power consumption', isCorrect: false },
      { id: 'd', text: 'Protect against overvoltage', isCorrect: false }
    ],
    explanation: 'Pull-up resistors provide a defined logic high level when the input pin is floating (not connected).'
  },
  {
    id: 'es-mock-80',
    question: 'The instruction "ANDI R20, 0x0F" performs:',
    type: 'single',
    options: [
      { id: 'a', text: 'Arithmetic addition', isCorrect: false },
      { id: 'b', text: 'Bitwise AND operation', isCorrect: true },
      { id: 'c', text: 'Bit rotation', isCorrect: false },
      { id: 'd', text: 'Logical OR operation', isCorrect: false }
    ],
    explanation: 'ANDI performs bitwise AND operation between the register and immediate value.'
  },
  {
    id: 'es-mock-81',
    question: 'To toggle a bit in a register, which instruction is most efficient?',
    type: 'single',
    options: [
      { id: 'a', text: 'AND', isCorrect: false },
      { id: 'b', text: 'OR', isCorrect: false },
      { id: 'c', text: 'EOR (XOR)', isCorrect: true },
      { id: 'd', text: 'COM', isCorrect: false }
    ],
    explanation: 'EOR (XOR) is the most efficient way to toggle bits in a register.'
  },
  {
    id: 'es-mock-82',
    question: 'The SUBI instruction can work with registers:',
    type: 'single',
    options: [
      { id: 'a', text: 'R0-R31', isCorrect: false },
      { id: 'b', text: 'R16-R31', isCorrect: true },
      { id: 'c', text: 'R0-R15', isCorrect: false },
      { id: 'd', text: 'R24-R31', isCorrect: false }
    ],
    explanation: 'SUBI (Subtract Immediate) can only be used with registers R16-R31.'
  },
  {
    id: 'es-mock-83',
    question: 'What is the maximum displacement in register indirect with displacement mode?',
    type: 'single',
    options: [
      { id: 'a', text: '15', isCorrect: false },
      { id: 'b', text: '31', isCorrect: false },
      { id: 'c', text: '63', isCorrect: true },
      { id: 'd', text: '127', isCorrect: false }
    ],
    explanation: 'Register indirect with displacement mode supports displacement values from 0 to 63.'
  },
  {
    id: 'es-mock-84',
    question: 'The LPM instruction is used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Load from data memory', isCorrect: false },
      { id: 'b', text: 'Load from program memory', isCorrect: true },
      { id: 'c', text: 'Load from I/O space', isCorrect: false },
      { id: 'd', text: 'Load from EEPROM', isCorrect: false }
    ],
    explanation: 'LPM (Load Program Memory) is used to load data from program memory (Flash).'
  },
  {
    id: 'es-mock-85',
    question: 'In C programming for AVR, the ISR macro is defined in:',
    type: 'single',
    options: [
      { id: 'a', text: 'avr/io.h', isCorrect: false },
      { id: 'b', text: 'avr/interrupt.h', isCorrect: true },
      { id: 'c', text: 'avr/pgmspace.h', isCorrect: false },
      { id: 'd', text: 'avr/eeprom.h', isCorrect: false }
    ],
    explanation: 'The ISR macro is defined in avr/interrupt.h header file.'
  },
  {
    id: 'es-mock-86',
    question: 'The volatile keyword in C for AVR is important for:',
    type: 'single',
    options: [
      { id: 'a', text: 'Optimization prevention on variables that can change unexpectedly', isCorrect: true },
      { id: 'b', text: 'Speed optimization', isCorrect: false },
      { id: 'c', text: 'Memory allocation', isCorrect: false },
      { id: 'd', text: 'Function inlining', isCorrect: false }
    ],
    explanation: 'volatile prevents compiler optimization on variables that can change unexpectedly (like hardware registers).'
  },
  {
    id: 'es-mock-87',
    question: 'What is the typical value for RAMEND in ATmega328P?',
    type: 'single',
    options: [
      { id: 'a', text: '0x08FF', isCorrect: true },
      { id: 'b', text: '0x085F', isCorrect: false },
      { id: 'c', text: '0x04FF', isCorrect: false },
      { id: 'd', text: '0x02FF', isCorrect: false }
    ],
    explanation: 'RAMEND in ATmega328P is typically 0x08FF (end of 2KB SRAM).'
  },
  {
    id: 'es-mock-88',
    question: 'The stack grows:',
    type: 'single',
    options: [
      { id: 'a', text: 'From low to high memory addresses', isCorrect: false },
      { id: 'b', text: 'From high to low memory addresses', isCorrect: true },
      { id: 'c', text: 'In both directions', isCorrect: false },
      { id: 'd', text: 'Only in external RAM', isCorrect: false }
    ],
    explanation: 'The stack grows from high to low memory addresses in AVR architecture.'
  },
  {
    id: 'es-mock-89',
    question: 'For precise timing, which timer mode is preferred?',
    type: 'single',
    options: [
      { id: 'a', text: 'Normal mode', isCorrect: false },
      { id: 'b', text: 'CTC mode', isCorrect: true },
      { id: 'c', text: 'Fast PWM', isCorrect: false },
      { id: 'd', text: 'Phase correct PWM', isCorrect: false }
    ],
    explanation: 'CTC (Clear Timer on Compare) mode provides precise timing control.'
  },
  {
    id: 'es-mock-90',
    question: 'The instruction "LDD R20, Z+5" loads:',
    type: 'single',
    options: [
      { id: 'a', text: 'Address Z+5 into R20', isCorrect: false },
      { id: 'b', text: 'Contents of memory location (Z+5) into R20', isCorrect: true },
      { id: 'c', text: 'R20 into location Z+5', isCorrect: false },
      { id: 'd', text: 'Immediate value 5 into R20', isCorrect: false }
    ],
    explanation: 'LDD loads the contents of memory location (Z+5) into register R20.'
  },
  {
    id: 'es-mock-91',
    question: 'Which power reduction technique is NOT available in ATmega328P?',
    type: 'single',
    options: [
      { id: 'a', text: 'Sleep modes', isCorrect: false },
      { id: 'b', text: 'Power reduction registers', isCorrect: false },
      { id: 'c', text: 'Clock gating', isCorrect: false },
      { id: 'd', text: 'Dynamic voltage scaling', isCorrect: true }
    ],
    explanation: 'Dynamic voltage scaling is not available in ATmega328P; it has fixed voltage operation.'
  },
  {
    id: 'es-mock-92',
    question: 'The brown-out detector (BOD) is used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Detect overheating', isCorrect: false },
      { id: 'b', text: 'Monitor supply voltage and reset if too low', isCorrect: true },
      { id: 'c', text: 'Control power consumption', isCorrect: false },
      { id: 'd', text: 'Regulate output voltage', isCorrect: false }
    ],
    explanation: 'BOD monitors supply voltage and resets the microcontroller if voltage drops below threshold.'
  },
  {
    id: 'es-mock-93',
    question: 'In assembly language, comments start with:',
    type: 'single',
    options: [
      { id: 'a', text: '//', isCorrect: false },
      { id: 'b', text: '/*', isCorrect: false },
      { id: 'c', text: ';', isCorrect: true },
      { id: 'd', text: '#', isCorrect: false }
    ],
    explanation: 'In AVR assembly language, comments start with semicolon (;).'
  },
  {
    id: 'es-mock-94',
    question: 'The EEPROM in ATmega328P can be programmed:',
    type: 'single',
    options: [
      { id: 'a', text: 'Only during chip programming', isCorrect: false },
      { id: 'b', text: 'Only at runtime', isCorrect: false },
      { id: 'c', text: 'Both during programming and at runtime', isCorrect: true },
      { id: 'd', text: 'Never by user program', isCorrect: false }
    ],
    explanation: 'EEPROM can be programmed both during chip programming and at runtime by user programs.'
  },
  {
    id: 'es-mock-95',
    question: 'What is the purpose of the AREF pin?',
    type: 'single',
    options: [
      { id: 'a', text: 'Analog ground reference', isCorrect: false },
      { id: 'b', text: 'ADC voltage reference', isCorrect: true },
      { id: 'c', text: 'Amplifier reference', isCorrect: false },
      { id: 'd', text: 'Audio reference', isCorrect: false }
    ],
    explanation: 'AREF pin provides external voltage reference for ADC conversions.'
  },
  {
    id: 'es-mock-96',
    question: 'The fuse bits in AVR are used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Configure hardware features', isCorrect: true },
      { id: 'b', text: 'Store user data', isCorrect: false },
      { id: 'c', text: 'Control interrupts', isCorrect: false },
      { id: 'd', text: 'Set clock frequency only', isCorrect: false }
    ],
    explanation: 'Fuse bits configure various hardware features like clock source, BOD, and bootloader settings.'
  },
  {
    id: 'es-mock-97',
    question: 'Which instruction is used to clear the carry flag?',
    type: 'single',
    options: [
      { id: 'a', text: 'SEC', isCorrect: false },
      { id: 'b', text: 'CLC', isCorrect: true },
      { id: 'c', text: 'CLT', isCorrect: false },
      { id: 'd', text: 'CLZ', isCorrect: false }
    ],
    explanation: 'CLC (Clear Carry) instruction clears the carry flag.'
  },
  {
    id: 'es-mock-98',
    question: 'The WDR instruction is used to:',
    type: 'single',
    options: [
      { id: 'a', text: 'Read watchdog timer', isCorrect: false },
      { id: 'b', text: 'Reset watchdog timer', isCorrect: true },
      { id: 'c', text: 'Disable watchdog timer', isCorrect: false },
      { id: 'd', text: 'Configure watchdog timer', isCorrect: false }
    ],
    explanation: 'WDR (Watchdog Reset) instruction resets the watchdog timer to prevent system reset.'
  },
  {
    id: 'es-mock-99',
    question: 'In Harvard architecture, the advantage is:',
    type: 'single',
    options: [
      { id: 'a', text: 'Simpler design', isCorrect: false },
      { id: 'b', text: 'Lower cost', isCorrect: false },
      { id: 'c', text: 'Simultaneous instruction fetch and data access', isCorrect: true },
      { id: 'd', text: 'Higher memory density', isCorrect: false }
    ],
    explanation: 'Harvard architecture allows simultaneous instruction fetch and data access through separate buses.'
  },
  {
    id: 'es-mock-100',
    question: 'The main difference between CALL and RCALL instructions is:',
    type: 'single',
    options: [
      { id: 'a', text: 'CALL is faster', isCorrect: false },
      { id: 'b', text: 'CALL uses absolute addressing, RCALL uses relative', isCorrect: true },
      { id: 'c', text: 'RCALL can call further distances', isCorrect: false },
      { id: 'd', text: 'They are identical', isCorrect: false }
    ],
    explanation: 'CALL uses absolute addressing while RCALL uses relative addressing from the current PC.'
  }
];
