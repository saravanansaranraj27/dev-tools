export interface Command {
  name: string;
  cmd: string;
  desc: string;
}

export interface Category {
  category: string;
  commands: Command[];
}

export type TopicKey =
  | 'java'
  | 'Spring Boot'
  | 'python'
  | 'FastAPI'
  | 'git'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'regex'
  | 'sql';

export const CHEAT_SHEET_DATA: Record<TopicKey, Category[]> = {
  java: [
    {
      category: 'Basics & Modern Java',
      commands: [
        {
          name: 'Variable',
          cmd: 'int count = 10;',
          desc: 'Declare a variable with an explicit type',
        },
        {
          name: 'Main Method',
          cmd: 'public static void main(String[] args) { }',
          desc: 'Application entry point',
        },
        {
          name: 'Print Output',
          cmd: 'System.out.println("Hello");',
          desc: 'Print a line to standard output',
        },
        {
          name: 'String Format',
          cmd: 'String.format("Name: %s, Age: %d", name, age)',
          desc: 'Create a formatted string',
        },
        {
          name: 'If Statement',
          cmd: 'if (count > 0) { System.out.println("Positive"); }',
          desc: 'Run code conditionally',
        },
        {
          name: 'For Loop',
          cmd: 'for (int i = 0; i < 10; i++) { }',
          desc: 'Repeat code with a counter',
        },
        {
          name: 'Method',
          cmd: 'static int add(int a, int b) { return a + b; }',
          desc: 'Define a reusable method',
        },
        {
          name: 'Local var',
          cmd: 'var users = new ArrayList<String>();',
          desc: 'Local variable type inference; the compiler still infers a static type',
        },
        {
          name: 'Text Block',
          cmd: 'String json = """\n    { "name": "John" }\n    """;',
          desc: 'Multi-line string literal',
        },
        {
          name: 'Switch Expression',
          cmd: 'var result = switch (status) { case 1 -> "ACTIVE"; default -> "UNKNOWN"; };',
          desc: 'Modern switch expression that returns a value',
        },
        {
          name: 'Pattern Matching',
          cmd: 'if (obj instanceof String s) { System.out.println(s.length()); }',
          desc: 'Type check and binding pattern in one expression',
        },
        {
          name: 'Record',
          cmd: 'record User(Long id, String name, String email) {}',
          desc: 'Compact immutable data carrier with generated accessors and methods',
        },
        {
          name: 'Sealed Interface',
          cmd: 'sealed interface Shape permits Circle, Rectangle {}',
          desc: 'Restrict which classes or interfaces can implement a type',
        },
        {
          name: 'Try With Resources',
          cmd: 'try (var reader = Files.newBufferedReader(path)) { }',
          desc: 'Automatically close AutoCloseable resources',
        },
      ],
    },
    {
      category: 'Collections & Streams',
      commands: [
        {
          name: 'ArrayList',
          cmd: 'List<String> users = new ArrayList<>();',
          desc: 'Create a mutable list',
        },
        {
          name: 'List Of',
          cmd: 'List.of("Java", "Python", "Go")',
          desc: 'Create an immutable list',
        },
        {
          name: 'Set Of',
          cmd: 'Set.of("Java", "Python", "Go")',
          desc: 'Create an immutable set',
        },
        {
          name: 'Map Of',
          cmd: 'Map.of("name", "John", "age", 30)',
          desc: 'Create an immutable map',
        },
        {
          name: 'Stream Filter',
          cmd: 'users.stream().filter(User::isActive).toList()',
          desc: 'Filter elements and collect into an unmodifiable list',
        },
        {
          name: 'Stream Map',
          cmd: 'users.stream().map(User::getName).toList()',
          desc: 'Transform each stream element',
        },
        {
          name: 'Optional',
          cmd: 'Optional.ofNullable(value).orElse("default")',
          desc: 'Represent an optional value without direct null checks',
        },
        {
          name: 'Stream Reduce',
          cmd: 'numbers.stream().reduce(0, Integer::sum)',
          desc: 'Reduce stream elements into a single value',
        },
        {
          name: 'Group By',
          cmd: 'users.stream().collect(Collectors.groupingBy(User::getCity))',
          desc: 'Group elements by a classifier function',
        },
        {
          name: 'To Map',
          cmd: 'users.stream().collect(Collectors.toMap(User::getId, User::getName))',
          desc: 'Convert stream elements into a map',
        },
        {
          name: 'HashMap',
          cmd: 'Map<String, Integer> scores = new HashMap<>();',
          desc: 'Create a mutable key-value map',
        },
        {
          name: 'Parallel Stream',
          cmd: 'numbers.parallelStream().map(this::process).toList()',
          desc: 'Process stream operations using parallel execution when appropriate',
        },
      ],
    },
    {
      category: 'OOP & Error Handling',
      commands: [
        {
          name: 'Interface',
          cmd: 'interface PaymentService { void pay(BigDecimal amount); }',
          desc: 'Define a contract implemented by classes',
        },
        {
          name: 'Enum',
          cmd: 'enum Status { ACTIVE, INACTIVE, PENDING }',
          desc: 'Type-safe fixed set of constants',
        },
        {
          name: 'Constructor',
          cmd: 'User(String name) { this.name = name; }',
          desc: 'Initialize an object when it is created',
        },
        {
          name: 'Abstract Class',
          cmd: 'abstract class BaseService { abstract void execute(); }',
          desc: 'Define shared behavior with abstract members',
        },
        {
          name: 'Interface Default',
          cmd: 'interface Loggable { default void log() { } }',
          desc: 'Provide a default implementation in an interface',
        },
        {
          name: 'Try Catch',
          cmd: 'try { riskyOperation(); } catch (Exception e) { e.printStackTrace(); }',
          desc: 'Handle an exception',
        },
        {
          name: 'Throw Exception',
          cmd: 'throw new IllegalArgumentException("Invalid value");',
          desc: 'Explicitly signal an invalid argument or state',
        },
        {
          name: 'Multi Catch',
          cmd: 'try { execute(); } catch (IOException | SQLException e) { }',
          desc: 'Handle multiple exception types with one catch block',
        },
        {
          name: 'Custom Exception',
          cmd: 'class UserNotFoundException extends RuntimeException { }',
          desc: 'Define an application-specific unchecked exception',
        },
      ],
    },
  ],

  'Spring Boot': [
    {
      category: 'REST Controllers',
      commands: [
        {
          name: 'Spring Boot Application',
          cmd: '@SpringBootApplication\npublic class Application { }',
          desc: 'Mark the main Spring Boot application class',
        },
        {
          name: 'REST Controller',
          cmd: '@RestController\n@RequestMapping("/api/users")\nclass UserController { }',
          desc: 'Create a REST controller with a common URL prefix',
        },
        {
          name: 'GET Endpoint',
          cmd: '@GetMapping("/{id}")\npublic User getUser(@PathVariable Long id) { }',
          desc: 'Handle a GET request with a path variable',
        },
        {
          name: 'Path Variable',
          cmd: '@GetMapping("/{id}")\npublic User get(@PathVariable Long id) { }',
          desc: 'Bind a URL path segment to a method parameter',
        },
        {
          name: 'POST Endpoint',
          cmd: '@PostMapping\npublic ResponseEntity<User> create(@RequestBody @Valid CreateUserRequest req) { }',
          desc: 'Handle a validated JSON request body',
        },
        {
          name: 'PUT Endpoint',
          cmd: '@PutMapping("/{id}")\npublic User update(@PathVariable Long id, @RequestBody User user) { }',
          desc: 'Replace or update a resource',
        },
        {
          name: 'DELETE Endpoint',
          cmd: '@DeleteMapping("/{id}")\npublic ResponseEntity<Void> delete(@PathVariable Long id) { }',
          desc: 'Delete a resource by identifier',
        },
        {
          name: 'Query Parameter',
          cmd: '@RequestParam(defaultValue = "0") int page',
          desc: 'Read an HTTP query parameter with a default',
        },
        {
          name: 'Request Header',
          cmd: '@RequestHeader("Authorization") String authorization',
          desc: 'Read a specific HTTP request header',
        },
        {
          name: 'Validation',
          cmd: '@Valid @RequestBody CreateUserRequest request',
          desc: 'Trigger Jakarta Bean Validation on a request body',
        },
        {
          name: 'Response Entity',
          cmd: 'return ResponseEntity.status(HttpStatus.CREATED).body(user);',
          desc: 'Return a custom HTTP status and response body',
        },
        {
          name: 'Exception Handler',
          cmd: '@ExceptionHandler(UserNotFoundException.class)\nResponseEntity<?> handle(UserNotFoundException ex) { }',
          desc: 'Handle a specific exception in a controller',
        },
      ],
    },
    {
      category: 'Dependency Injection & Configuration',
      commands: [
        {
          name: 'Service',
          cmd: '@Service\nclass UserService { }',
          desc: 'Register a service component with Spring',
        },
        {
          name: 'Repository',
          cmd: '@Repository\ninterface UserRepository extends JpaRepository<User, Long> { }',
          desc: 'Create a Spring Data repository',
        },
        {
          name: 'Constructor Injection',
          cmd: 'private final UserService service;\n\nUserController(UserService service) {\n    this.service = service;\n}',
          desc: 'Preferred dependency injection through the constructor',
        },
        {
          name: 'Configuration',
          cmd: '@Configuration\nclass AppConfig { }',
          desc: 'Declare a class containing Spring configuration',
        },
        {
          name: 'Bean',
          cmd: '@Bean\nObjectMapper objectMapper() { return new ObjectMapper(); }',
          desc: 'Register an object as a Spring-managed bean',
        },
        {
          name: 'Configuration Property',
          cmd: '@Value("${app.name}")\nprivate String appName;',
          desc: 'Inject a configuration property value',
        },
        {
          name: 'Transactional',
          cmd: '@Transactional\npublic void transfer(...) { }',
          desc: 'Execute a method within a transaction',
        },
        {
          name: 'Profile',
          cmd: '@Profile("dev")\n@Bean\nDataSource devDataSource() { }',
          desc: 'Activate configuration only for a specific Spring profile',
        },
      ],
    },
    {
      category: 'Security',
      commands: [
        {
          name: 'Password Encoder',
          cmd: '@Bean\nPasswordEncoder passwordEncoder() {\n    return new BCryptPasswordEncoder();\n}',
          desc: 'Configure password hashing with BCrypt',
        },
        {
          name: 'Security Filter Chain',
          cmd: '@Bean\nSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n    http.authorizeHttpRequests(auth -> auth\n        .requestMatchers("/public/**").permitAll()\n        .anyRequest().authenticated());\n    return http.build();\n}',
          desc: 'Configure HTTP authorization rules using SecurityFilterChain',
        },
        {
          name: 'Method Security',
          cmd: '@EnableMethodSecurity',
          desc: 'Enable method-level authorization annotations',
        },
        {
          name: 'Pre Authorize',
          cmd: '@PreAuthorize("hasRole(\'ADMIN\')")',
          desc: 'Require an authorization rule before invoking a method',
        },
        {
          name: 'OAuth2 Resource Server',
          cmd: 'http.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));',
          desc: 'Configure JWT bearer-token authentication for an API',
        },
      ],
    },
    {
      category: 'Testing & Data',
      commands: [
        {
          name: 'Unit Test',
          cmd: '@ExtendWith(MockitoExtension.class)\nclass UserServiceTest { }',
          desc: 'Run a unit test with Mockito support',
        },
        {
          name: 'Mock Dependency',
          cmd: '@Mock UserRepository repository;',
          desc: 'Create a Mockito mock dependency',
        },
        {
          name: 'Inject Mocks',
          cmd: '@InjectMocks UserService service;',
          desc: 'Inject Mockito mocks into the class under test',
        },
        {
          name: 'Assert',
          cmd: 'assertThat(user.getName()).isEqualTo("John");',
          desc: 'Assert an expected value in a test',
        },
        {
          name: 'MockMvc',
          cmd: 'mockMvc.perform(get("/api/users/1"))\n    .andExpect(status().isOk());',
          desc: 'Test Spring MVC endpoints without starting a real server',
        },
        {
          name: 'JPA Test',
          cmd: '@DataJpaTest\nclass UserRepositoryTest { }',
          desc: 'Test JPA repositories using a focused test context',
        },
        {
          name: 'Spring Boot Test',
          cmd: '@SpringBootTest\nclass ApplicationTest { }',
          desc: 'Load the Spring application context for integration testing',
        },
      ],
    },
  ],

  python: [
    {
      category: 'Modern Python Basics',
      commands: [
        {
          name: 'Variable',
          cmd: 'name = "John"\ncount = 10',
          desc: 'Assign values to variables',
        },
        {
          name: 'Print',
          cmd: 'print("Hello, Python!")',
          desc: 'Output text to the console',
        },
        {
          name: 'Input',
          cmd: 'name = input("Enter your name: ")\nprint(f"Hello, {name}!")',
          desc: 'Read a value from the user via the terminal',
        },
        {
          name: 'Import',
          cmd: 'import requests',
          desc: 'Import a module',
        },
        {
          name: 'Len',
          cmd: 'len(items)',
          desc: 'Get the number of items',
        },
        {
          name: 'Function',
          cmd: 'def greet(name):\n    return f"Hello, {name}"',
          desc: 'Define a reusable block of code',
        },
        {
          name: 'If Statement',
          cmd: 'if age >= 18:\n    print("Adult")',
          desc: 'Run code conditionally',
        },
        {
          name: 'For Loop',
          cmd: 'for i in range(3):\n    print(i)',
          desc: 'Repeat a block of code a fixed number of times',
        },
        {
          name: 'For Enumerate',
          cmd: 'for index, item in enumerate(items):\n    print(index, item)',
          desc: 'Loop with both index and value',
        },
        {
          name: 'While Loop',
          cmd: 'count = 0\nwhile count < 3:\n    print(count)\n    count += 1',
          desc: 'Repeat a block while a condition remains true',
        },
        {
          name: 'Slice',
          cmd: 'letters = "abcdef"\nprint(letters[1:4])',
          desc: 'Extract a portion of a string or list',
        },
        {
          name: 'List Append',
          cmd: 'items = [1, 2]\nitems.append(3)\nprint(items)',
          desc: 'Add a new item to the end of a list',
        },
        {
          name: 'String Join',
          cmd: 'names = ["A", "B", "C"]\nprint(", ".join(names))',
          desc: 'Combine list items into a single string',
        },
        {
          name: 'F String',
          cmd: 'f"Hello, {name}! Age: {age}"',
          desc: 'Interpolate expressions directly into strings',
        },
        {
          name: 'Ternary',
          cmd: 'result = "yes" if condition else "no"',
          desc: 'Conditional expression in one line',
        },
        {
          name: 'Unpacking',
          cmd: 'first, *middle, last = items',
          desc: 'Unpack iterable elements with starred capture',
        },
        {
          name: 'List Comprehension',
          cmd: '[x * x for x in range(10) if x % 2 == 0]',
          desc: 'Build a transformed and filtered list',
        },
        {
          name: 'Dict Comprehension',
          cmd: '{k: v for k, v in pairs if v is not None}',
          desc: 'Build a dictionary with optional filtering',
        },
        {
          name: 'Match Statement',
          cmd: 'match command:\n    case "start":\n        run()\n    case "stop":\n        stop()\n    case _:\n        pass',
          desc: 'Structural pattern matching',
        },
        {
          name: 'Type Hint',
          cmd: 'def greet(name: str) -> str:\n    return f"Hello {name}"',
          desc: 'Annotate function parameters and return values',
        },
        {
          name: 'Union Type',
          cmd: 'def find(id: int) -> User | None:',
          desc: 'Use the modern | syntax for union types',
        },
        {
          name: 'Type Alias',
          cmd: 'type UserId = int',
          desc: 'Define a reusable type alias in modern Python',
        },
        {
          name: 'Lambda',
          cmd: 'square = lambda x: x * x\nprint(square(5))',
          desc: 'Create a small anonymous function in one line',
        },
        {
          name: 'Walrus Operator',
          cmd: 'if (n := len(data)) > 10:\n    print(n)',
          desc: 'Assign a value as part of an expression',
        },
      ],
    },
    {
      category: 'Data Structures',
      commands: [
        {
          name: 'Dictionary',
          cmd: 'user = {"name": "John", "age": 30}',
          desc: 'Create a dictionary',
        },
        {
          name: 'Dataclass',
          cmd: '@dataclass\nclass User:\n    name: str\n    age: int = 0',
          desc: 'Generate common methods for data-focused classes',
        },
        {
          name: 'Set Operations',
          cmd: 'intersection = a & b\ndifference = a - b\nunion = a | b',
          desc: 'Perform common mathematical set operations',
        },
        {
          name: 'Sorted Custom',
          cmd: 'sorted(users, key=lambda user: user.age, reverse=True)',
          desc: 'Sort objects using a custom key',
        },
        {
          name: 'DefaultDict',
          cmd: 'dd = defaultdict(list)\ndd["users"].append(user)',
          desc: 'Automatically create a default value for missing keys',
        },
        {
          name: 'Counter',
          cmd: 'Counter("abracadabra").most_common(3)',
          desc: 'Count hashable values and retrieve the most common',
        },
        {
          name: 'Deque',
          cmd: 'queue = deque(maxlen=100)\nqueue.append(item)',
          desc: 'Efficient double-ended queue',
        },
        {
          name: 'Zip Strict',
          cmd: 'for name, age in zip(names, ages, strict=True):\n    print(name, age)',
          desc: 'Zip iterables and raise an error when their lengths differ',
        },
      ],
    },
    {
      category: 'Files, Errors & Modules',
      commands: [
        {
          name: 'Pathlib',
          cmd: 'from pathlib import Path\ntext = Path("data/file.txt").read_text()',
          desc: 'Modern object-oriented filesystem operations',
        },
        {
          name: 'Environment Variable',
          cmd: 'api_key = os.environ.get("API_KEY")',
          desc: 'Read environment configuration safely',
        },
        {
          name: 'Context Manager',
          cmd: 'with open("data.txt", encoding="utf-8") as file:\n    content = file.read()',
          desc: 'Automatically manage resource cleanup',
        },
        {
          name: 'Exception Handling',
          cmd: 'try:\n    result = process()\nexcept ValueError as exc:\n    logger.error("Invalid value: %s", exc)',
          desc: 'Handle a specific exception type',
        },
        {
          name: 'Custom Exception',
          cmd: 'class UserNotFoundError(Exception):\n    pass',
          desc: 'Create a domain-specific exception',
        },
        {
          name: 'Logging',
          cmd: 'import logging\nlogger = logging.getLogger(__name__)\nlogger.info("Processing request")',
          desc: 'Create module-level application logging',
        },
        {
          name: 'Virtual Environment',
          cmd: 'python -m venv .venv',
          desc: 'Create a Python virtual environment',
        },
        {
          name: 'Install Package',
          cmd: 'python -m pip install requests',
          desc: 'Install a Python package with pip',
        },
      ],
    },
  ],

  FastAPI: [
    {
      category: 'Endpoints',
      commands: [
        {
          name: 'App Instance',
          cmd: 'from fastapi import FastAPI\napp = FastAPI()',
          desc: 'Create the FastAPI application instance',
        },
        {
          name: 'GET Route',
          cmd: '@app.get("/users/{user_id}")\nasync def get_user(user_id: int):\n    return {"id": user_id}',
          desc: 'Create a GET endpoint with validated path parameters',
        },
        {
          name: 'POST Body',
          cmd: '@app.post("/users")\nasync def create_user(user: UserCreate):\n    return user',
          desc: 'Parse and validate JSON using a Pydantic model',
        },
        {
          name: 'Query Parameters',
          cmd: '@app.get("/search")\nasync def search(q: str, limit: int = 10):\n    return {"q": q, "limit": limit}',
          desc: 'Declare query parameters directly in the function signature',
        },
        {
          name: 'DELETE Route',
          cmd: '@app.delete("/users/{user_id}")\nasync def delete_user(user_id: int):\n    return {"deleted": user_id}',
          desc: 'Create a DELETE endpoint',
        },
        {
          name: 'Status Code',
          cmd: '@app.post("/users", status_code=status.HTTP_201_CREATED)\nasync def create_user(user: UserCreate):\n    return user',
          desc: 'Set the HTTP status code returned by an endpoint',
        },
        {
          name: 'Response Model',
          cmd: '@app.get("/users", response_model=list[UserOut])\nasync def users():\n    return user_list',
          desc: 'Validate and filter endpoint responses using a Pydantic schema',
        },
        {
          name: 'Path Validation',
          cmd: '@app.get("/users/{user_id}")\nasync def get_user(user_id: Annotated[int, Path(gt=0)]):',
          desc: 'Add validation constraints to path parameters',
        },
        {
          name: 'Query Validation',
          cmd: 'q: Annotated[str, Query(min_length=3, max_length=50)]',
          desc: 'Validate query parameters using Annotated and Query',
        },
        {
          name: 'Uvicorn Run',
          cmd: 'python -m uvicorn main:app --reload',
          desc: 'Run a FastAPI application locally with automatic reload',
        },
      ],
    },
    {
      category: 'Pydantic & Models',
      commands: [
        {
          name: 'Pydantic Model',
          cmd: 'class UserCreate(BaseModel):\n    name: str\n    email: EmailStr',
          desc: 'Define validated request or response data',
        },
        {
          name: 'Optional Field',
          cmd: 'class UserUpdate(BaseModel):\n    name: str | None = None',
          desc: 'Represent a field that may be omitted or null',
        },
        {
          name: 'Email Field',
          cmd: 'from pydantic import BaseModel, EmailStr\n\nclass User(BaseModel):\n    email: EmailStr',
          desc: 'Validate an email field with Pydantic',
        },
        {
          name: 'Field Validation',
          cmd: 'name: Annotated[str, Field(min_length=2, max_length=100)]',
          desc: 'Attach validation constraints to a Pydantic field',
        },
        {
          name: 'Model Dump',
          cmd: 'user.model_dump(exclude_none=True)',
          desc: 'Convert a Pydantic model to a dictionary',
        },
      ],
    },
    {
      category: 'Dependencies & Errors',
      commands: [
        {
          name: 'HTTP Exception',
          cmd: 'raise HTTPException(status_code=404, detail="User not found")',
          desc: 'Return a structured HTTP error response',
        },
        {
          name: 'Dependency',
          cmd: 'async def get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()',
          desc: 'Create a dependency with resource cleanup',
        },
        {
          name: 'Use Dependency',
          cmd: 'async def get_users(db: Annotated[Session, Depends(get_db)]):',
          desc: 'Inject a dependency into an endpoint',
        },
        {
          name: 'Middleware',
          cmd: '@app.middleware("http")\nasync def timing(request: Request, call_next):\n    return await call_next(request)',
          desc: 'Run logic around HTTP request processing',
        },
      ],
    },
  ],

  git: [
    {
      category: 'Basics',
      commands: [
        {
          name: 'Init',
          cmd: 'git init',
          desc: 'Initialize a Git repository',
        },
        {
          name: 'Clone',
          cmd: 'git clone <url>',
          desc: 'Clone a remote repository',
        },
        {
          name: 'Status',
          cmd: 'git status',
          desc: 'Show working tree and staging area status',
        },
        {
          name: 'Remote',
          cmd: 'git remote -v',
          desc: 'Show configured remote repositories',
        },
        {
          name: 'Add File',
          cmd: 'git add <file>',
          desc: 'Stage a specific file',
        },
        {
          name: 'Add All',
          cmd: 'git add .',
          desc: 'Stage changes under the current directory',
        },
        {
          name: 'Diff',
          cmd: 'git diff',
          desc: 'Show unstaged changes',
        },
        {
          name: 'Staged Diff',
          cmd: 'git diff --staged',
          desc: 'Show staged changes',
        },
        {
          name: 'Commit',
          cmd: 'git commit -m "feat: add user API"',
          desc: 'Create a commit from staged changes',
        },
        {
          name: 'Log',
          cmd: 'git log --oneline --graph --decorate --all',
          desc: 'View compact commit history and branches',
        },
      ],
    },
    {
      category: 'Branches & Remote',
      commands: [
        {
          name: 'Create Branch',
          cmd: 'git switch -c feature/user-api',
          desc: 'Create and switch to a new branch',
        },
        {
          name: 'Switch Branch',
          cmd: 'git switch main',
          desc: 'Switch to an existing branch',
        },
        {
          name: 'List Branches',
          cmd: 'git branch -a',
          desc: 'List local and remote-tracking branches',
        },
        {
          name: 'Fetch',
          cmd: 'git fetch origin',
          desc: 'Download remote references without modifying your working branch',
        },
        {
          name: 'Pull',
          cmd: 'git pull --rebase origin main',
          desc: 'Fetch and replay local commits on top of the updated branch',
        },
        {
          name: 'Push',
          cmd: 'git push -u origin feature/user-api',
          desc: 'Push a branch and establish its upstream',
        },
        {
          name: 'Merge',
          cmd: 'git merge feature/user-api',
          desc: 'Merge another branch into the current branch',
        },
        {
          name: 'Cherry Pick',
          cmd: 'git cherry-pick <commit>',
          desc: 'Apply one existing commit to the current branch',
        },
        {
          name: 'Rebase',
          cmd: 'git rebase main',
          desc: 'Replay current branch commits on top of another branch',
        },
      ],
    },
    {
      category: 'Undo & Recovery',
      commands: [
        {
          name: 'Unstage File',
          cmd: 'git restore --staged <file>',
          desc: 'Remove a file from the staging area while keeping changes',
        },
        {
          name: 'Discard Changes',
          cmd: 'git restore <file>',
          desc: 'Restore a working-tree file to its last committed state',
        },
        {
          name: 'Amend Commit',
          cmd: 'git commit --amend --no-edit',
          desc: 'Add staged changes to the most recent commit',
        },
        {
          name: 'Stash',
          cmd: 'git stash push -m "work in progress"',
          desc: 'Temporarily save uncommitted changes',
        },
        {
          name: 'Stash Pop',
          cmd: 'git stash pop',
          desc: 'Restore the most recent stash and remove it from the stash list',
        },
        {
          name: 'Revert Commit',
          cmd: 'git revert <commit>',
          desc: 'Create a new commit that reverses an earlier commit',
        },
        {
          name: 'Reset Soft',
          cmd: 'git reset --soft HEAD~1',
          desc: 'Move HEAD back while keeping changes staged',
        },
        {
          name: 'Reset Hard',
          cmd: 'git reset --hard HEAD',
          desc: 'Reset tracked files to the current commit; discards local changes',
        },
      ],
    },
  ],

  CSS: [
    {
      category: 'Flexbox',
      commands: [
        {
          name: 'Center Content',
          cmd: 'display: flex;\njustify-content: center;\nalign-items: center;',
          desc: 'Center items horizontally and vertically',
        },
        {
          name: 'Column',
          cmd: 'display: flex;\nflex-direction: column;',
          desc: 'Stack flex items vertically',
        },
        {
          name: 'Gap',
          cmd: 'display: flex;\ngap: 1rem;',
          desc: 'Create consistent spacing between flex items',
        },
        {
          name: 'Space Between',
          cmd: 'display: flex;\njustify-content: space-between;',
          desc: 'Place first and last items at opposite edges',
        },
        {
          name: 'Wrap Items',
          cmd: 'display: flex;\nflex-wrap: wrap;',
          desc: 'Allow flex items to move onto multiple lines',
        },
        {
          name: 'Flex Grow',
          cmd: 'flex: 1 1 auto;',
          desc: 'Allow an item to grow and shrink within a flex container',
        },
        {
          name: 'Flex Basis',
          cmd: 'flex-basis: 200px;',
          desc: 'Set the initial main-axis size of a flex item',
        },
      ],
    },
    {
      category: 'Grid & Layout',
      commands: [
        {
          name: 'Box Sizing',
          cmd: '*, *::before, *::after { box-sizing: border-box; }',
          desc: 'Make declared dimensions include padding and borders',
        },
        {
          name: 'Grid Columns',
          cmd: 'display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1rem;',
          desc: 'Create a three-column responsive-friendly grid',
        },
        {
          name: 'Aspect Ratio',
          cmd: 'aspect-ratio: 16 / 9;',
          desc: 'Maintain a fixed width-to-height ratio',
        },
        {
          name: 'Responsive Image',
          cmd: 'img { max-width: 100%; height: auto; }',
          desc: 'Keep images from overflowing their containers',
        },
        {
          name: 'Auto Fit Grid',
          cmd: 'display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));',
          desc: 'Create columns that automatically fit available space',
        },
        {
          name: 'Grid Area',
          cmd: 'grid-template-areas:\n  "header header"\n  "sidebar main";',
          desc: 'Define semantic grid layout areas',
        },
        {
          name: 'Container Query',
          cmd: '@container (min-width: 600px) {\n  .card { grid-template-columns: 1fr 1fr; }\n}',
          desc: 'Style components based on their container size',
        },
      ],
    },
    {
      category: 'Modern CSS',
      commands: [
        {
          name: 'CSS Variable',
          cmd: ':root { --primary: #2563eb; }\n.button { color: var(--primary); }',
          desc: 'Define and reuse custom CSS properties',
        },
        {
          name: 'Media Query',
          cmd: '@media (max-width: 768px) { .nav { display: none; } }',
          desc: 'Apply styles at a viewport breakpoint',
        },
        {
          name: 'Clamp',
          cmd: 'font-size: clamp(1rem, 2vw, 2rem);',
          desc: 'Create fluid values with minimum and maximum limits',
        },
        {
          name: 'Focus Visible',
          cmd: 'button:focus-visible { outline: 2px solid currentColor; }',
          desc: 'Show keyboard-focused styling without affecting normal mouse focus',
        },
        {
          name: 'Reduced Motion',
          cmd: '@media (prefers-reduced-motion: reduce) {\n  * { animation: none; transition: none; }\n}',
          desc: 'Respect users who prefer reduced motion',
        },
        {
          name: 'Is Selector',
          cmd: ':is(h1, h2, h3) { line-height: 1.2; }',
          desc: 'Apply the same selector rules to multiple alternatives',
        },
        {
          name: 'Has Selector',
          cmd: '.card:has(img) { padding-top: 0; }',
          desc: 'Style an element based on the presence of a matching descendant',
        },
        {
          name: 'Nesting',
          cmd: '.card {\n  color: #222;\n  & .title { font-weight: 700; }\n}',
          desc: 'Nest related CSS rules using native CSS nesting',
        },
      ],
    },
  ],

  JavaScript: [
    {
      category: 'Array Methods',
      commands: [
        {
          name: 'For Each',
          cmd: 'arr.forEach(item => console.log(item))',
          desc: 'Run a function for each array element',
        },
        {
          name: 'Map',
          cmd: 'arr.map(item => item * 2)',
          desc: 'Transform every array element',
        },
        {
          name: 'Filter',
          cmd: 'arr.filter(item => item > 5)',
          desc: 'Keep elements matching a condition',
        },
        {
          name: 'Find',
          cmd: 'arr.find(item => item.id === 1)',
          desc: 'Return the first matching element',
        },
        {
          name: 'Find Index',
          cmd: 'arr.findIndex(item => item.id === 1)',
          desc: 'Return the index of the first matching element',
        },
        {
          name: 'Some',
          cmd: 'arr.some(x => x > 0)',
          desc: 'Check whether at least one element matches',
        },
        {
          name: 'Every',
          cmd: 'arr.every(x => x > 0)',
          desc: 'Check whether every element matches',
        },
        {
          name: 'Reduce',
          cmd: 'arr.reduce((sum, value) => sum + value, 0)',
          desc: 'Accumulate an array into one result',
        },
        {
          name: 'Sort',
          cmd: '[...arr].sort((a, b) => a - b)',
          desc: 'Sort numerically without mutating the original array',
        },
        {
          name: 'To Sorted',
          cmd: 'arr.toSorted((a, b) => a - b)',
          desc: 'Return a sorted copy without mutating the original array',
        },
        {
          name: 'Flat Map',
          cmd: 'arr.flatMap(x => [x, x * 2])',
          desc: 'Map values and flatten one level',
        },
        {
          name: 'Includes',
          cmd: 'arr.includes(value)',
          desc: 'Check whether an array contains a value',
        },
      ],
    },
    {
      category: 'Objects & Modern Syntax',
      commands: [
        {
          name: 'Const',
          cmd: 'const name = "John";',
          desc: 'Declare a block-scoped binding that cannot be reassigned',
        },
        {
          name: 'Let',
          cmd: 'let count = 0;',
          desc: 'Declare a block-scoped reassignable binding',
        },
        {
          name: 'Destructure',
          cmd: 'const { name, age } = user;',
          desc: 'Extract object properties into variables',
        },
        {
          name: 'Array Destructure',
          cmd: 'const [first, ...rest] = arr;',
          desc: 'Extract array elements with rest syntax',
        },
        {
          name: 'Spread',
          cmd: 'const updated = { ...user, active: true };',
          desc: 'Create a new object with copied and overridden properties',
        },
        {
          name: 'Optional Chaining',
          cmd: 'const city = user?.address?.city;',
          desc: 'Safely access nested properties',
        },
        {
          name: 'Nullish Coalescing',
          cmd: 'const name = user.name ?? "Guest";',
          desc: 'Use a fallback only for null or undefined',
        },
        {
          name: 'Logical Assignment',
          cmd: 'config.timeout ??= 5000;',
          desc: 'Assign a value only when the current value is nullish',
        },
      ],
    },
    {
      category: 'Async & Modules',
      commands: [
        {
          name: 'Async Function',
          cmd: 'async function getUser(id) {\n  const response = await fetch(`/api/users/${id}`);\n  return response.json();\n}',
          desc: 'Write asynchronous code using async/await',
        },
        {
          name: 'Try Catch Async',
          cmd: 'try {\n  await saveUser(user);\n} catch (error) {\n  console.error(error);\n}',
          desc: 'Handle rejected promises with try/catch',
        },
        {
          name: 'Fetch',
          cmd: 'const response = await fetch("/api/users");',
          desc: 'Make an HTTP request with the Fetch API',
        },
        {
          name: 'Promise All',
          cmd: 'const [users, posts] = await Promise.all([getUsers(), getPosts()]);',
          desc: 'Run independent promises concurrently',
        },
        {
          name: 'ES Module Export',
          cmd: 'export function calculateTotal(items) { }',
          desc: 'Export a named module member',
        },
        {
          name: 'ES Module Import',
          cmd: 'import { calculateTotal } from "./cart.js";',
          desc: 'Import a named module member',
        },
      ],
    },
  ],

  TypeScript: [
    {
      category: 'Types & Interfaces',
      commands: [
        {
          name: 'Basic Types',
          cmd: 'let name: string = "John";\nlet age: number = 30;\nlet active: boolean = true;',
          desc: 'Declare common primitive types',
        },
        {
          name: 'Interface',
          cmd: 'interface User {\n  name: string;\n  age: number;\n}',
          desc: 'Define the shape of an object',
        },
        {
          name: 'Array Type',
          cmd: 'const names: string[] = ["A", "B"];',
          desc: 'Type an array of values',
        },
        {
          name: 'Type Alias',
          cmd: 'type ID = string | number;',
          desc: 'Create a reusable named type',
        },
        {
          name: 'Optional Property',
          cmd: 'interface Config {\n  debug?: boolean;\n}',
          desc: 'Allow a property to be omitted',
        },
        {
          name: 'Readonly',
          cmd: 'interface User {\n  readonly id: number;\n}',
          desc: 'Prevent reassignment through the readonly property',
        },
        {
          name: 'Union',
          cmd: 'let id: string | number;',
          desc: 'Allow a value to have one of several types',
        },
        {
          name: 'Index Signature',
          cmd: 'interface Dictionary {\n  [key: string]: unknown;\n}',
          desc: 'Allow arbitrary string keys',
        },
        {
          name: 'Interface Extends',
          cmd: 'interface Admin extends User {\n  role: string;\n}',
          desc: 'Extend an existing interface',
        },
        {
          name: 'Intersection',
          cmd: 'type UserWithMeta = User & { createdAt: Date };',
          desc: 'Combine multiple types into one',
        },
        {
          name: 'Discriminated Union',
          cmd: 'type Result<T> =\n  | { kind: "ok"; data: T }\n  | { kind: "error"; message: string };',
          desc: 'Model alternatives using a discriminant property',
        },
      ],
    },
    {
      category: 'Generics & Utility Types',
      commands: [
        {
          name: 'Generic Function',
          cmd: 'function identity<T>(value: T): T {\n  return value;\n}',
          desc: 'Preserve the input type through a generic parameter',
        },
        {
          name: 'Generic Constraint',
          cmd: 'function getId<T extends { id: string }>(item: T): string {\n  return item.id;\n}',
          desc: 'Restrict a generic type to a required shape',
        },
        {
          name: 'Partial',
          cmd: 'type UserUpdate = Partial<User>;',
          desc: 'Make all properties optional',
        },
        {
          name: 'Pick',
          cmd: 'type UserPreview = Pick<User, "id" | "name">;',
          desc: 'Create a type containing selected properties',
        },
        {
          name: 'Omit',
          cmd: 'type PublicUser = Omit<User, "password">;',
          desc: 'Create a type excluding selected properties',
        },
        {
          name: 'Record',
          cmd: 'type UserMap = Record<string, User>;',
          desc: 'Create an object type with typed keys and values',
        },
        {
          name: 'Readonly',
          cmd: 'type ImmutableUser = Readonly<User>;',
          desc: 'Make all properties readonly',
        },
        {
          name: 'ReturnType',
          cmd: 'type Result = ReturnType<typeof getUser>;',
          desc: "Derive a function's return type",
        },
      ],
    },
    {
      category: 'Narrowing & Modern TS',
      commands: [
        {
          name: 'Narrowing',
          cmd: 'if (typeof value === "string") {\n  value.toUpperCase();\n}',
          desc: 'Narrow a union using runtime checks',
        },
        {
          name: 'Type Guard',
          cmd: 'function isUser(value: unknown): value is User {\n  return typeof value === "object" && value !== null && "name" in value;\n}',
          desc: 'Tell TypeScript when a runtime check establishes a type',
        },
        {
          name: 'Const Assertion',
          cmd: 'const roles = ["admin", "user"] as const;',
          desc: 'Preserve literal values as readonly tuple types',
        },
        {
          name: 'Satisfies',
          cmd: 'const config = {\n  port: 3000,\n  debug: true,\n} satisfies AppConfig;',
          desc: 'Validate an expression against a type while preserving inferred types',
        },
        {
          name: 'Non Null Assertion',
          cmd: 'const element = document.querySelector("#app")!;',
          desc: 'Tell TypeScript a value is not null; use only when guaranteed',
        },
      ],
    },
  ],

  regex: [
    {
      category: 'Character Classes',
      commands: [
        {
          name: 'Any Character',
          cmd: '.',
          desc: 'Match almost any character except line terminators by default',
        },
        {
          name: 'Literal Escape',
          cmd: '\\.',
          desc: 'Match a literal period instead of the wildcard dot',
        },
        {
          name: 'Digit',
          cmd: '\\d',
          desc: 'Match a digit; exact Unicode behavior depends on regex engine and flags',
        },
        {
          name: 'Non Digit',
          cmd: '\\D',
          desc: 'Match a non-digit',
        },
        {
          name: 'Word Character',
          cmd: '\\w',
          desc: 'Match a word character; behavior varies by regex engine',
        },
        {
          name: 'Non Word',
          cmd: '\\W',
          desc: 'Match a non-word character',
        },
        {
          name: 'Whitespace',
          cmd: '\\s',
          desc: 'Match whitespace characters',
        },
        {
          name: 'Non Whitespace',
          cmd: '\\S',
          desc: 'Match a non-whitespace character',
        },
        {
          name: 'Custom Class',
          cmd: '[abc]',
          desc: 'Match a, b, or c',
        },
        {
          name: 'Negated Class',
          cmd: '[^abc]',
          desc: 'Match a character other than a, b, or c',
        },
        {
          name: 'Range',
          cmd: '[a-z]',
          desc: 'Match a lowercase ASCII letter',
        },
      ],
    },
    {
      category: 'Anchors & Quantifiers',
      commands: [
        {
          name: 'Start',
          cmd: '^',
          desc: 'Match the start of a string or line depending on flags',
        },
        {
          name: 'End',
          cmd: '$',
          desc: 'Match the end of a string or line depending on flags',
        },
        {
          name: 'Zero Or One',
          cmd: '?',
          desc: 'Match the preceding token zero or one time',
        },
        {
          name: 'One Or More',
          cmd: '+',
          desc: 'Match the preceding token one or more times',
        },
        {
          name: 'Zero Or More',
          cmd: '*',
          desc: 'Match the preceding token zero or more times',
        },
        {
          name: 'Exact Count',
          cmd: '{3}',
          desc: 'Match exactly three occurrences',
        },
        {
          name: 'Range Count',
          cmd: '{2,5}',
          desc: 'Match between two and five occurrences',
        },
        {
          name: 'Lazy Quantifier',
          cmd: '.*?',
          desc: 'Match as few characters as possible',
        },
      ],
    },
    {
      category: 'Groups & Lookarounds',
      commands: [
        {
          name: 'Capturing Group',
          cmd: '(abc)',
          desc: 'Capture a matched group',
        },
        {
          name: 'Non Capturing Group',
          cmd: '(?:abc)',
          desc: 'Group without creating a capture',
        },
        {
          name: 'Alternation',
          cmd: '(cat|dog)',
          desc: 'Match either alternative',
        },
        {
          name: 'Capture Named',
          cmd: '(?<name>\\w+)',
          desc: 'Capture a group with a name in regex engines that support named groups',
        },
        {
          name: 'Positive Lookahead',
          cmd: 'foo(?=bar)',
          desc: 'Match foo only when followed by bar',
        },
        {
          name: 'Negative Lookahead',
          cmd: 'foo(?!bar)',
          desc: 'Match foo only when not followed by bar',
        },
        {
          name: 'Positive Lookbehind',
          cmd: '(?<=\\$)\\d+',
          desc: 'Match digits preceded by a dollar sign',
        },
        {
          name: 'Negative Lookbehind',
          cmd: '(?<!-)\\d+',
          desc: 'Match digits not preceded by a hyphen',
        },
      ],
    },
    {
      category: 'Common Patterns',
      commands: [
        {
          name: 'Integer',
          cmd: '^-?\\d+$',
          desc: 'Match a signed integer',
        },
        {
          name: 'Decimal',
          cmd: '^-?\\d+(\\.\\d+)?$',
          desc: 'Match an integer or decimal number',
        },
        {
          name: 'Whitespace Sequence',
          cmd: '\\s+',
          desc: 'Match one or more whitespace characters',
        },
        {
          name: 'Capture Key Value',
          cmd: '(\\w+)=(\\w+)',
          desc: 'Capture a simple key=value pair',
        },
        {
          name: 'Email Basic',
          cmd: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
          desc: 'Practical basic email-shaped validation; not full RFC email validation',
        },
        {
          name: 'URL Basic',
          cmd: '^https?://[^\\s]+$',
          desc: 'Match a basic HTTP or HTTPS URL shape',
        },
        {
          name: 'Trim Whitespace',
          cmd: '^\\s+|\\s+$',
          desc: 'Match leading or trailing whitespace for replacement',
        },
      ],
    },
  ],

  sql: [
    {
      category: 'Querying',
      commands: [
        {
          name: 'Select All',
          cmd: 'SELECT * FROM users;',
          desc: 'Retrieve all columns from a table',
        },
        {
          name: 'Select Specific',
          cmd: 'SELECT id, name, email FROM users;',
          desc: 'Retrieve only required columns',
        },
        {
          name: 'Where',
          cmd: 'SELECT * FROM users WHERE age > 25;',
          desc: 'Filter rows using a condition',
        },
        {
          name: 'AND OR',
          cmd: "WHERE age > 25 AND city = 'New York'",
          desc: 'Combine multiple filter conditions',
        },
        {
          name: 'OR',
          cmd: "SELECT * FROM users WHERE city = 'New York' OR city = 'Boston';",
          desc: 'Match either of multiple conditions',
        },
        {
          name: 'IN',
          cmd: "WHERE status IN ('active', 'pending')",
          desc: 'Match a value against multiple options',
        },
        {
          name: 'LIKE',
          cmd: "WHERE name LIKE 'J%'",
          desc: 'Pattern matching using % and _ wildcards',
        },
        {
          name: 'BETWEEN',
          cmd: "WHERE created_at BETWEEN '2026-01-01' AND '2026-12-31'",
          desc: 'Filter values within an inclusive range',
        },
        {
          name: 'IS NULL',
          cmd: 'WHERE deleted_at IS NULL',
          desc: 'Check specifically for SQL NULL',
        },
        {
          name: 'Alias',
          cmd: 'SELECT name AS user_name FROM users;',
          desc: 'Give a column or expression a readable alias',
        },
        {
          name: 'ORDER BY',
          cmd: 'ORDER BY created_at DESC',
          desc: 'Sort query results',
        },
        {
          name: 'LIMIT',
          cmd: 'LIMIT 20 OFFSET 40',
          desc: 'Return a limited page of results; syntax varies by database',
        },
      ],
    },
    {
      category: 'Modifying Data',
      commands: [
        {
          name: 'Insert',
          cmd: "INSERT INTO users (name, email)\nVALUES ('John', 'john@example.com');",
          desc: 'Insert one or more rows',
        },
        {
          name: 'Insert Multiple',
          cmd: "INSERT INTO users (name, email)\nVALUES ('John', 'john@example.com'), ('Jane', 'jane@example.com');",
          desc: 'Insert multiple rows in one statement',
        },
        {
          name: 'Update',
          cmd: "UPDATE users\nSET status = 'active'\nWHERE id = 1;",
          desc: 'Update rows matching a condition',
        },
        {
          name: 'Delete',
          cmd: 'DELETE FROM users WHERE id = 1;',
          desc: 'Delete rows matching a condition',
        },
        {
          name: 'Postgres Upsert',
          cmd: "INSERT INTO users (id, name)\nVALUES (1, 'John')\nON CONFLICT (id)\nDO UPDATE SET name = EXCLUDED.name;",
          desc: 'Insert or update a row on a PostgreSQL conflict',
        },
        {
          name: 'MySQL Upsert',
          cmd: "INSERT INTO users (id, name)\nVALUES (1, 'John')\nON DUPLICATE KEY UPDATE name = VALUES(name);",
          desc: 'Insert or update when a unique key conflicts in MySQL',
        },
        {
          name: 'Truncate',
          cmd: 'TRUNCATE TABLE logs;',
          desc: 'Remove all rows from a table; behavior and transaction semantics vary by database',
        },
      ],
    },
    {
      category: 'Joins & Aggregation',
      commands: [
        {
          name: 'Count',
          cmd: 'SELECT COUNT(*) FROM users;',
          desc: 'Count rows',
        },
        {
          name: 'Distinct',
          cmd: 'SELECT DISTINCT city FROM users;',
          desc: 'Return unique values',
        },
        {
          name: 'Inner Join',
          cmd: 'SELECT u.id, o.id\nFROM users u\nJOIN orders o ON o.user_id = u.id;',
          desc: 'Return rows where both tables have matching records',
        },
        {
          name: 'Left Join',
          cmd: 'SELECT u.id, o.id\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id;',
          desc: 'Keep all rows from the left table',
        },
        {
          name: 'Sum',
          cmd: 'SELECT SUM(amount) FROM orders;',
          desc: 'Calculate the sum of a numeric column',
        },
        {
          name: 'Group By',
          cmd: 'SELECT city, COUNT(*)\nFROM users\nGROUP BY city;',
          desc: 'Aggregate rows by a grouping column',
        },
        {
          name: 'Having',
          cmd: 'SELECT city, COUNT(*) AS total\nFROM users\nGROUP BY city\nHAVING COUNT(*) > 10;',
          desc: 'Filter groups after aggregation',
        },
      ],
    },
    {
      category: 'CTEs & Window Functions',
      commands: [
        {
          name: 'CTE',
          cmd: 'WITH active_users AS (\n  SELECT * FROM users WHERE active = true\n)\nSELECT * FROM active_users;',
          desc: 'Define a reusable query result for the following statement',
        },
        {
          name: 'Row Number',
          cmd: 'SELECT *,\n       ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn\nFROM employees;',
          desc: 'Assign sequential numbers within each partition',
        },
        {
          name: 'Window Rank',
          cmd: 'SELECT name, salary,\n       RANK() OVER (ORDER BY salary DESC) AS rank\nFROM employees;',
          desc: 'Rank rows without collapsing them into groups',
        },
        {
          name: 'Running Total',
          cmd: 'SUM(amount) OVER (ORDER BY created_at) AS running_total',
          desc: 'Calculate a cumulative value without grouping away rows',
        },
        {
          name: 'Lag',
          cmd: 'LAG(amount) OVER (ORDER BY created_at) AS previous_amount',
          desc: 'Access a value from a previous row',
        },
      ],
    },
    {
      category: 'Transactions & Schema',
      commands: [
        {
          name: 'Create Table',
          cmd: 'CREATE TABLE users (\n  id BIGINT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE\n);',
          desc: 'Create a relational table with constraints',
        },
        {
          name: 'Foreign Key',
          cmd: 'FOREIGN KEY (user_id) REFERENCES users(id)',
          desc: 'Enforce a relationship between tables',
        },
        {
          name: 'Create Index',
          cmd: 'CREATE INDEX idx_users_email ON users(email);',
          desc: 'Create an index to improve suitable lookup performance',
        },
        {
          name: 'Alter Table',
          cmd: 'ALTER TABLE users ADD COLUMN phone VARCHAR(20);',
          desc: 'Modify an existing table definition',
        },
        {
          name: 'Transaction',
          cmd: 'BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
          desc: 'Execute multiple changes as one transaction',
        },
        {
          name: 'Rollback',
          cmd: "BEGIN;\nUPDATE users SET status = 'inactive';\nROLLBACK;",
          desc: 'Undo changes made in the current transaction',
        },
      ],
    },
  ],
};
