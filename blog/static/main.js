var activeids=[1,2,3,4,5];
function makeactive(subject){
    for(var i=1;i<=5;i++){
        if(document.getElementById(i).classList=="nav-link active") document.getElementById(i).classList="nav-link";
    }
    document.getElementById(subject).classList="nav-link active";
    if(subject=="1"){
        document.getElementById("content").innerHTML="Unit 1<br>\
        Sequences, Convergence of a sequence, Cauchy sequence, Sandwich theorem, Monotone sequences, Convergence of series, Integral test, Comparison test, Ratio test , Root test , Absolute convergence, Power series, Radius of convergence, Taylor series, Maclaurin series\
        <br><br>\
        Unit 2<br>\
        ϵδ-definition of limit and continuity, Intermediate value theorem, Sequential approach of continuity, Differentiability, Rolle’s Theorem, Lagrange and Cauchy Mean Value Theorem\
        <br><br>\
        Unit 3<br>\
        Functions of several variables, Continuity, Two Path Test for Discontinuity, Partial derivatives, Mixed derivative theorem, Total derivative, Increment theorem, Chain rule, Euler’s Theorem, Necessary and sufficient conditions for Maxima, Minima and Saddle point, The method of Lagrange multipliers, Introduction to Riemann integration, Elementary properties of integral, Fundamental Theorems of Calculus, Improper integral of first and second kind, Comparison Test, Polar coordinates, Graphs in polar coordinates,Area between two curves when their equations are given in polar coordinates, Length of a curve.\
        <br><br>\
        Unit 4<br>\
        Double integral, Fubini's theorem, Volumes and Areas, Change of order of integration, Double integral in polar coordinates, Change of variables in a multiple integral\
        <br><br>\
        Unit 5<br>\
        Vector valued function, Continuity and differentiability of vector functions, Gradient, Directional derivatives, Tangent plane and Normal line, Arc length for space curves, Unit tangent vector, Unit normal and Curvature to plane and space, Line integral surface area, Green's Theorem, Surface and area, Stokes' Theorem, The divergence theorem ";
        
    }else if(subject=="2"){
        document.getElementById("content").innerHTML="Unit 1: Vector spaces<br>\
        Sets, Relations, equivalence relations, functions, partition of set, Cartesian product of Sets, Binary operations, examples. Definition and examples of Groups (stress on additive and multiplicative), Subgroups, Fields, Vector Spaces over real and complex fields, Subspaces, Some properties of subspaces.\
        Finite linear combinations, Dependent and independent vectors. Basis and Dimension of vector space. The infinite dimensional vector spaces Ck[a, b], k = 0, 1, 2,…\
        <br><br>\
        Unit 2:<br>\
        Linear transformations, Kernel and Range of a linear transformation, Rank-nullity theorem, Matrix of a linear transformation over finite basis,\
        Matrix of change of basis, Similar matrices, rank of a matrix. Solution of system of linear equations,\
        Eigenvalues and eigenvectors, eigenspace, Cayley- Hamilton theorem and its implications. Inner product spaces, Matrix of inner product, norm induced by an inner product, parallelogram law.";
    }else if(subject=="3"){
        document.getElementById("content").innerHTML="1.      LINUX commands, Kernel, Shell<br>\
        2.      Basic Operations of a Computer, Input and Output Devices, Primary and Secondary Memory, Compiler and Interpreter, Control Unit, Cache Memory<br>\
        3.      Binary Number Representation: Signed Magnitude, 1s complement, 2s complement<br>\
        4.      Algorithms and Flowcharts<br>\
        5.      C Programming: constants, variables and keywords, Writing simple C programs with printf() and scanf() commands<br>\
        6.      C operators and Evaluation of Expressions using Precedence Table<br>\
        7.      Decision Control Structures<br>\
        8.      Case Control Structures<br>\
        9.      Conditional Expressions";
    }else if(subject=="4"){
        document.getElementById("content").innerHTML="Unit IA<br>\
        Introduction to Biology, Levels of body organization, basic anatomical terminology<br>\
        <br>\
        Unit IB<br>\
        Introduction to plants with its primary and secondary uses<br>\
        <br>\
        Unit IIA<br>\
        Cell and molecular biology of animal cell: Plasma membrane, chemical and electrical properties of membrane, transport across the membrane, mechanism of cell, communication, cell adhesion & extracellular matrix; mitochondria, cytoplasm, cell organelles, nucleus, cell division, aging of cells, cellular diversity and disorders related to cells<br>\
        <br>\
        Unit IIB<br>\
        Cell and molecular biology of plant cell: Plasma membrane, cell wall, chloroplast and photosynthesis<br>\
        <br>\
        Unit IIIA<br>\
        Animal tissue: Elementary understanding of animal tissues; cell junctions, aging of tissues and disorders related to it. Detail understanding of components of blood, their functions and disorders<br>\
        <br>\
        Unit IIIB<br>\
        Plant tissue: Elementary understanding of plant tissues and aging of tissues and disorders related to it<br>\
        <br>\
        Unit IV<br>\
        Basic anatomy of human body systems: Cardiovascular, digestive, integumentary, nervous, respiratory, endocrine, skeletal, urinary & reproductive systems<br>\
        <br>\
        Unit V<br>\
        Basic anatomy of plant systems: Basic morphology and microscopy of plants";
    }else{
        document.getElementById("content").innerHTML="The frame of references; Coordinate system: Cartesian, plane polar, cylindrical and spherical polar<br>\
        The motion of single and system of particles, conservation laws<br>\
        Constrained motion and types of constraints<br>\
        Degrees of freedom and generalized coordinates<br>\
        Concept of virtual displacement and workless constraints<br>\
        Principle of virtual work and D’ Alembert principles [no derivation!]<br>\
        Concept of generalized velocity, momentum and force<br>\
        Derivation of the Lagrange equation of motion using D’ Alembert principle<br>\
        Applications of Lagrange equation; cyclic or ignorable coordinates<br>\
        Derivation of Hamilton’s canonical equations<br>\
        Applications of Hamilton’s canonical equations<br>\
        Poisson brackets (with examples)<br>\
        Black body radiation, photoelectric effect and Compton effect (No  derivation)<br>\
        Wave-particle duality, de Broglie hypothesis, Davisson and Germer experiment<br>\
        Concept of wave packets, Heisenberg uncertainty principle, phase velocity & group velocity<br>\
        Concept of the wave function, postulates of quantum mechanics<br>\
        Basic operators and expectation values, Schrodinger equations<br>\
        Applications of Schrödinger time-independent equation: Particle in a Box, Potential Step and Potential barrier<br>\
        Introduction of relativity, Michelson-Morley experiment<br>\
        Postulates of Special relativity and Lorentz Transformation<br>\
        Length Contraction and Time  dilation, Doppler Effect<br>\
        Velocity addition and mass-energy equivalence (no  derivation)";
    }
}

function changebranch(branch){
    if(branch=="mnc"){
        document.getElementById("branch").innerHTML="Mathematics";
        document.getElementById("1").style.display="block";
        document.getElementById("2").style.display="block";
        document.getElementById("3").style.display="none";
        document.getElementById("4").style.display="none";
        document.getElementById("5").style.display="none";
        makeactive(1);
    }
    if(branch=="cse"){
        document.getElementById("branch").innerHTML="Computer Science";
        document.getElementById("1").style.display="none";
        document.getElementById("2").style.display="none";
        document.getElementById("3").style.display="block";
        document.getElementById("4").style.display="none";
        document.getElementById("5").style.display="none";
        makeactive(3);
    }
    if(branch=="ep"){
        document.getElementById("branch").innerHTML="Engeneering Physics";
        document.getElementById("1").style.display="none";
        document.getElementById("2").style.display="none";
        document.getElementById("3").style.display="none";
        document.getElementById("4").style.display="none";
        document.getElementById("5").style.display="block";
        makeactive(5);
    }
    if(branch=="pharma"){
        document.getElementById("branch").innerHTML="Pharmaceutical";
        document.getElementById("1").style.display="none";
        document.getElementById("2").style.display="none";
        document.getElementById("3").style.display="none";
        document.getElementById("4").style.display="block";
        document.getElementById("5").style.display="none";
        makeactive(4);
    }
    
}